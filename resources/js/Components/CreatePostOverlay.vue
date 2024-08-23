<script setup>
    import { ref,reactive } from "vue";
    import { router,usePage } from "@inertiajs/vue3";
    import Close from "vue-material-design-icons/Close.vue";
    import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
    import MapMarkerOutline from "vue-material-design-icons/MapMarkerOutline.vue";
    import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
    const user = usePage().props.auth.user
    const emit = defineEmits(['close']);
    const form = reactive({
        text:null,
        file:null
    });
    let isValidFile = ref(null);
    let fileDisplay = ref('');
    let textarea = ref('');
    let error = ref({
       text:null,
       file:null
    });

    const createPostFunc = () =>{
        error.value.text = null;
        error.value.file = null;
        router.post("/posts",form,{
            forceFormData:true,
            preserveState:true,
            onError:errors =>{
                errors && errors.text ? error.value.text = errors.text : '';
                errors && errors.file ? error.value.file = errors.file : '';
            },
            onSuccess:() =>{
                closeOverlay()
            }
        })
    }

    const closeOverlay = () =>{
        form.text = null;
        form.file = null;
        fileDisplay.value = '';
        emit("close")
    }

    const getUploadedImage = (e) =>{
        form.file = e.target.files[0];
        let extention = form.file.name.substring(form.file.name.lastIndexOf('.') + 1);
        if (extention === 'png' || extention === 'jpg' || extention === "jpeg"){
            isValidFile.value = true;
        }else{
            isValidFile.value = false;
            return;
        }
        fileDisplay.value = URL.createObjectURL(e.target.files[0]);
        setTimeout(()=>{
           document.getElementById("TextAreaSection").scrollIntoView({behavior:'smooth'}) ;
        },300);
    }
</script>

<template>
    <div id="OverlaySection" class="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3">
        <button @click="$event => closeOverlay()" class="absolute right-3 cursor-pointer">
            <Close :size="27" fill-color="#FFFFFF"/>
        </button>
        <div class="max-w-6xl h-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl">
            <div class="flex items-center justify-between w-full rounded-t-xl p-3 border-b border-b-gray-300">
                <ArrowLeft :size="30" fill-color="#000000" @click="$event => closeOverlay()"/>
                <div class="text-lg font-extrabold">New reel</div>
                <button class="text-lg text-blue-500 hover:text-gray-900 font-extrabold" @click="$event =>createPostFunc() ">Share</button>
            </div>
            <div class="w-full md:flex h-[calc(100%-55px)] rounded-auto">
                <div class="flex items-center bg-gray-100 w-full h-full overflow-hidden">
                    <div v-if="!fileDisplay" class="flex flex-col items-center mx-auto">
                        <label for="file" class="hover:bg-blue-700 bg-blue-500 rounded-lg p-2.5 text-white font-extrabold">
                            Select From Computer
                        </label>
                        <input type="file" @input="$event => getUploadedImage($event)" id="file" class="hidden">
                        <div class="text-red-500 text-center p-2 font-extrabold" v-if="error && error.file">{{error.file}}</div>
                        <div class="text-red-500 text-center p-2 font-extrabold" v-if="!fileDisplay && isValidFile === false">
                            File not accepted
                        </div>
                    </div>
                    <img v-if="fileDisplay && isValidFile === true" class="min-w-[400px] p-4 mx-auto" :src="fileDisplay">
                </div>

                <div id="TextAreaSection" class="max-w-[720px] w-full relative">
                    <div class="flex items-center justify-between p-3">
                        <div class="flex items-center">
                            <img :src="user.file" class="rounded-full w-[38px] h-[38px]" alt="">
                            <div class="ml-4 font-extrabold text-[15px]">{{ user.name }}</div>
                        </div>
                    </div>

                    <div v-if="error && error.text" class="text-red-500 p-2 font-extrabold">{{error.text}}</div>
                    <div class="flex w-full max-h-[200px] bg-white border-b">
                        <textarea placeholder="write caption ..." rows="10" ref="textarea" v-model="form.text"
                        class="placeholder-gray-500 w-full border-0 mt-2 mb-2 z-50 focus:ring-0 text-gray-600 text-[18px]"
                        ></textarea>
                    </div>

                    <div class="flex items-center justify-between border-b p-3">
                        <div class="text-lg font-extrabold text-gray-500">Add Location</div>
                        <MapMarkerOutline :size="27"/>
                    </div>

                    <div class="flex items-center justify-between border-b p-3">
                        <div class="text-lg font-extrabold text-gray-500">Accesibility</div>
                        <ChevronDown :size="27"/>
                    </div>

                    <div class="flex items-center justify-between border-b p-3">
                        <div class="text-lg font-extrabold text-gray-500">Advanced Settings</div>
                        <ChevronDown :size="27"/>
                    </div>

                    <div class="text-gray-500 mt-3 p-3 text-sm">
                        override default xhr behavior, allowing you to implement your own upload-file's request.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
