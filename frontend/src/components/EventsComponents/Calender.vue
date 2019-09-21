<template>
    <div class="modal fade" id="ShowCalender" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Event Calender</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="calender">
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalender/3.9.0/fullcalender.min.js"></script>
                        {!!$calender->calender() !!}
                        {!!$calender->script() !!}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>   
    </div> 
</template>
<script>
export default {
    name:'Calender'
}
</script>
<style scoped>

</style>