<template>
    <div>
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-xs-8">
                        <h4 class="page-title">Leave Type</h4>
                    </div>
                    <div class="col-xs-4 text-right m-b-30">
                        <a href="#" class="btn btn-primary rounded pull-right" data-toggle="modal" data-target="#add_leavetype"><i class="fa fa-plus"></i> Add Leave Type</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <h5>Total Leaves : {{ totalDays }}</h5>
                            <br>
                            <table class="table table-striped custom-table datatable">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Leave Type</th>
                                    <th>Leave Days</th>
                                    <th>Status</th>
                                    <th class="text-right">Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr v-for="(item, index) in leaveTypes">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.days }} Days</td>
                                    <td>
                                        <div class="dropdown action-label">
                                            <a class="btn btn-white btn-sm rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                <div v-if="item.status === 'active'">
                                                    <i class="fa fa-dot-circle-o text-success"></i> Active <i class="caret"></i>
                                                </div>
                                                <div v-else-if="item.status === 'inactive'">
                                                    <i class="fa fa-dot-circle-o text-danger"></i> Inactive <i class="caret"></i>
                                                </div>
                                            </a>
                                            <ul class="dropdown-menu pull-right">
                                                <li v-if="item.status === 'active'">
                                                    <a href="#">
                                                        <i class="fa fa-dot-circle-o text-danger"></i> Inactive
                                                    </a>
                                                </li>
                                                <li v-else-if="item.status === 'inactive'"><a href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        <div class="dropdown">
                                            <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                            <ul class="dropdown-menu pull-right">
                                                <li><a href="#" title="Edit" data-toggle="modal" data-target="#edit_leavetype"><i class="fa fa-pencil m-r-5"></i> Edit</a></li>
                                                <li><a href="#" title="Delete" data-toggle="modal" data-target="#delete_leavetype"><i class="fa fa-trash-o m-r-5"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="add_leavetype" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="modal-content modal-md">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Leave Type</h4>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addLeaveType">
                            <div class="form-group">
                                <label>Leave Type <span class="text-danger">*</span></label>
                                <input class="form-control" type="text" v-model="leaveTypeDetails.name">
                            </div>
                            <div class="form-group">
                                <label>Number of days <span class="text-danger">*</span></label>
                                <input class="form-control" type="text" v-model="leaveTypeDetails.days">
                            </div>
                            <div class="m-t-20 text-center">
                                <button class="btn btn-primary">Add Leave Type</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="edit_leavetype" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="modal-content modal-md">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Leave Type</h4>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addLeaveType">
                            <div class="form-group">
                                <label>Leave Type Name <span class="text-danger">*</span></label>
                                <input class="form-control" type="text" value="Casual Leave">
                            </div>
                            <div class="form-group">
                                <label>Number of days <span class="text-danger">*</span></label>
                                <input class="form-control" type="text" value="12">
                            </div>
                            <div class="m-t-20 text-center">
                                <button class="btn btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                leaveTypes : [],
                leaveTypeDetails : {
                    name : '',
                    days : 0
                }
            }
        },
        computed: {
            totalDays() {
                var total = 0
                this.leaveTypes.forEach(item => {
                    total += parseInt(item.days)
                })

                return total
            }
        },
        mounted() {
            this.getLeaveTypes();
        },
        methods : {
            addLeaveType () {
                this.$axios.post('api/leave-type', this.leaveTypeDetails, this.$auth.getHeader()).then(response => {
                    this.leaveTypeDetails.name = this.leaveTypeDetails.days = ''
                    this.getLeaveTypes();
                    this.$swal({
                        title: 'Success',
                        text: 'Added Successfully',
                        type: 'success',
                    })
                })
            },
            getLeaveTypes() {
                this.$axios.get('api/leave-type', this.$auth.getHeader()).then(response => {
                    this.leaveTypes = response.data.data
                })
            },
        }
    }
</script>

<style>

</style>