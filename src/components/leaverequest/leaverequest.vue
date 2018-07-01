<template>
    <div>
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-xs-8">
                        <h4 class="page-title">Leave Request</h4>
                    </div>
                    <div class="col-xs-4 text-right m-b-30">
                        <a href="#" class="btn btn-primary rounded pull-right" data-toggle="modal" data-target="#add_leave"><i class="fa fa-plus"></i> Add Leave</a>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table m-b-0">
                                <thead>
                                <tr>
                                    <!--<th>Employee</th>-->
                                    <th>#</th>
                                    <th>Leave Type</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>No of Days</th>
                                    <th>Reason</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-right">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(item, index) in leaveRequests">
                                    <!--<td>-->
                                        <!--<a class="avatar">R</a>-->
                                        <!--<h2><a href="#">Richard Miles <span>Web Developer</span></a></h2>-->
                                    <!--</td>-->
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <div v-if="item.leave_type">
                                            {{ item.leave_type.name }}
                                        </div>

                                    </td>
                                    <td>{{ item.from_date | formatDate }}</td>
                                    <td>{{ item.to_date | formatDate }}</td>
                                    <td>{{ item.number_of_days }}</td>
                                    <td>{{ item.leave_reason }}</td>
                                    <td class="text-center">
                                        <div class="dropdown action-label">
                                            <div class="btn btn-white btn-sm rounded dropdown-toggle">
                                                <div v-if="item.status === 'pending'">
                                                    <i class="fa fa-dot-circle-o text-info"></i>
                                                    Pending
                                                </div>
                                                <div v-else-if="item.status === 'approved'">
                                                    <i class="fa fa-dot-circle-o text-success"></i>
                                                    Approved
                                                </div>
                                                <div  v-else-if="item.status === 'declined'">
                                                    <i class="fa fa-dot-circle-o text-success"></i> Declined
                                                </div>

                                            </div>
                                            <!--<ul class="dropdown-menu pull-right">-->
                                                <!--<li><a href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a></li>-->
                                                <!--<li><a href="#"><i class="fa fa-dot-circle-o text-success"></i> Approved</a></li>-->
                                                <!--<li><a href="#"><i class="fa fa-dot-circle-o text-danger"></i> Declined</a></li>-->
                                            <!--</ul>-->
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        <div class="dropdown">
                                            <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                            <ul class="dropdown-menu pull-right">
                                                <li><a href="#" title="Edit" data-toggle="modal" data-target="#edit_leave"><i class="fa fa-pencil m-r-5"></i> Edit</a></li>
                                                <li><a href="#" title="Decline" data-toggle="modal" data-target="#delete_approve"><i class="fa fa-trash-o m-r-5"></i> Delete</a></li>
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

        <div id="add_leave" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="modal-content modal-md">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Leave Request</h4>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="createLeaveRequest">
                            <div class="form-group">
                                <label>Leave Type <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="leaveRequestDetails.leave_type_id">
                                    <option v-for="(item, index) in leaveTypes" :value="item.id">{{ item.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>From <span class="text-danger">*</span></label>
                                <div class="cal-icon">
                                    <input class="form-control datetimepicker" id="from_date" type="text" @click="numberOfDays">
                                </div>
                            </div>

                            <div class="form-group">
                                <label>To <span class="text-danger">*</span></label>
                                <div class="cal-icon">
                                    <input class="form-control datetimepicker" id="to_date" type="text"
                                           @click="numberOfDays">
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Number of days <span class="text-danger">*</span></label>
                                <input class="form-control" readonly="" type="text" v-model="dayDiffrence">
                            </div>
                            <div class="form-group">
                                <label>Remaining Leaves <span class="text-danger">*</span></label>
                                <input class="form-control" readonly="" value="12" type="text">
                            </div>
                            <div class="form-group">
                                <label>Leave Reason <span class="text-danger">*</span></label>
                                <textarea rows="4" cols="5" class="form-control" v-model="leaveRequestDetails.leave_reason"></textarea>
                            </div>
                            <div class="m-t-20 text-center">
                                <button class="btn btn-primary">Send Leave Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="edit_leave" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="modal-content modal-md">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Leave</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label>Leave Type <span class="text-danger">*</span></label>
                                <select class="select">
                                    <option value="">Select Leave Type</option>
                                    <option value="">Casual Leave 12 Days</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>From <span class="text-danger">*</span></label>
                                <div class="cal-icon"><input class="form-control datetimepicker" value="01-01-2017" type="text"></div>
                            </div>
                            <div class="form-group">
                                <label>To <span class="text-danger">*</span></label>
                                <div class="cal-icon"><input class="form-control datetimepicker" value="01-01-2017" type="text"></div>
                            </div>
                            <div class="form-group">
                                <label>Number of days <span class="text-danger">*</span></label>
                                <input class="form-control" readonly="" type="text" value="2">
                            </div>
                            <div class="form-group">
                                <label>Remaining Leaves <span class="text-danger">*</span></label>
                                <input class="form-control" readonly="" value="12" type="text">
                            </div>
                            <div class="form-group">
                                <label>Leave Reason <span class="text-danger">*</span></label>
                                <textarea rows="4" cols="5" class="form-control">Going to hospital</textarea>
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
    import moment from 'moment'
    export default{
        data () {
            return {
                leaveRequests : [],
                leaveTypes : [],
                leaveRequestDetails : {
                    leave_type_id : '',
                    from_date : '',
                    to_date : '',
                    leave_reason : '',
                },
                dayDiffrence : ''
            }
        },
        mounted () {
            this.$jqscripts.manageinit();
            this.getLeaveTypes();
            this.getAllLeaveRequests();
        },
        methods : {
            getLeaveTypes() {
                this.$axios.get('api/leave-type', this.$auth.getHeader()).then(response => {
                    this.leaveTypes = response.data.data
                })
            },
            createLeaveRequest() {
                this.$axios.post('api/leave-request', this.leaveRequestDetails, this.$auth.getHeader()).then(response => {
                    this.getAllLeaveRequests();

                    this.$swal({
                        title: 'Success',
                        text: 'Submitted Successfully! Your request is in pending.',
                        type: 'success',
                    })
                })
            },
            getAllLeaveRequests() {
                this.$axios.get('api/leave-request', this.$auth.getHeader()).then(response => {
                    this.leaveRequests = response.data.data
                    console.log(response)
                })
            },
            numberOfDays() {
                this.leaveRequestDetails.from_date = document.getElementById('from_date').value;
                this.leaveRequestDetails.to_date = document.getElementById('to_date').value;

                var x = moment(this.leaveRequestDetails.from_date, "DD-MM-YYYY")
                var y = moment(this.leaveRequestDetails.to_date, "DD-MM-YYYY")
                var diffrence = y.diff(x, 'days')

                this.dayDiffrence = diffrence + 1;
                console.log(this.dayDiffrence)
            },
        },
        filters : {
            formatDate(date) {
                return moment(date).format('DD MMM YYYY');
            }
        }
    }
</script>

<style>

</style>