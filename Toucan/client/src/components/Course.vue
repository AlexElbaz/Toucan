<template>
    <div>
        <div @click="this.$emit('show-posts', this.course._id); selectCourse();"
        class="card mb-3 text-white">

            <div class="d-flex align-items-center">
                    <div class="my-auto" id="img-holder">
                        <img class ="pfp" :src="course.img"> 
                    </div>
                <div class="p-0 mx-auto" id="text-holder">
            <div class="card-title p-0 m-0">
                <h5>{{ course.name }}</h5>
            </div>
            <div class="card-body p-0">
                <p class="mb-0">{{course.courseCode}}</p>
                <p class="d-inline mx-1">{{ course.teacher }}</p>
                <p class="d-inline mx-1">{{ course.time }}</p>
            </div>
            </div>
            <div v-if="canEdit">
                <button class="btn btn-close btn-sm me-2" 
                data-bs-toggle="modal" 
                :data-bs-target="'#'+ course.modalID"
                ></button> 
            </div>
        </div>
        </div>

        <div class="container">
            <!-- Modal -->
            <div
            class="modal fade"
            :id="course.modalID"
            tabindex="-1"
            :aria-labelledby="course.modalID"
            aria-hidden="true"
            >
            <div class="modal-dialog modal-dialog-centered">
                <img class="logo" src='../assets/toucan.png'>
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title ms-auto" id="exampleModalLabel">Are You Sure You Want to Delete This Class?</h5>
                        <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-footer mx-auto">
                        <button @click="$emit('delete-course', course._id)" type="button" data-bs-dismiss="modal" class="btn yes">Yes</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Course',
    props: {
        course: Object,
        canEdit: Boolean,
    },
    data() {
    return {
      isSelected: false
    };
    },
    methods: {
        selectCourse(){

            document.getElementById("feed").classList.remove("selected");

            if(!document.getElementById(this.course._id).classList.contains("selected")){
            document.getElementById(this.course._id).classList.add("selected");

            let current = document.getElementById(this.course._id);
            let next = current.nextElementSibling;
            let isLater = false;

            while(next){
                
                if(next.classList.contains("selected"))
                    isLater = true;
                
                next = next.nextElementSibling;
            }
            
            if(document.getElementsByClassName('selected').length > 1){
                if(isLater){
                    document.getElementsByClassName('selected')[1].classList.remove('selected');
                } else {
                    document.getElementsByClassName('selected')[0].classList.remove('selected');
                }
            }
            
            }
        }
    },
    mounted(){
        document.getElementById("feed").classList.add("selected");
    }
}
</script>

<style scoped>

.card{
    background: rgba(100, 100, 100, 0.5);
    border-radius: 30px;
    border-style: none;
}

.card:hover{
    border: white 1px solid;
    background: rgba(0, 0, 0, 0.2);
}

.selected{
    border: white 1px solid;
    background: rgba(0, 0, 0, 0.2);
}

.pfp{
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-left: 10px;
}

.logo{
  position: absolute;
  width: 45%;
  left: 25%;
  top: 100px;
}

.modal-dialog{
  position: relative;
}

.modal-content{
    background: #f3ffed;
    border-radius: 30px;
}


.yes{
    color: white;
    background: rgb(1, 141, 90);
    transition: font-size 0.3s;
    transition-timing-function: cubic-bezier(0.1, 1, 0.1);
}


.yes:hover{
    color: white;
    font-size: 20px;
}

#text-holder{
    width: 12rem;
}

  @media (max-width: 1200px) {
  #text-holder{
      width: 6rem;
  }
}

  @media (max-width: 991px) {
  #text-holder{
      width: 12rem;
  }
}

</style>