<template>
    <div>
        <!--<sidenav></sidenav>-->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-xs-4">
                        <h4 class="page-title">Employee</h4>
                    </div>
                    <div class="col-xs-8 text-right m-b-20">
                        <a href="#" class="btn btn-primary rounded pull-right" data-toggle="modal" data-target="#add_employee"><i class="fa fa-plus"></i> Add Employee</a>
                    </div>
                </div>

                <div class="row staff-grid-row" v-if="loader">
                    <div class="col-md-offset-5 col-md-2">
                        <img src="assets/img/loading_animation2.gif" alt="" class="loaderimage">
                    </div>
                </div>
                <div class="row staff-grid-row" v-else>
                    <div class="col-md-4 col-sm-4 col-xs-6 col-lg-3" v-for="(item, index) in employees">
                        <div class="profile-widget">
                            <div class="profile-img">
                                <a href="profile.html"><img class="avatar" src="assets/img/user.jpg" alt=""></a>
                            </div>
                            <div class="dropdown profile-action">
                                <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="#" data-toggle="modal" data-target="#edit_employee"><i class="fa fa-pencil m-r-5"></i> Edit</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a></li>
                                </ul>
                            </div>
                            <h4 class="user-name m-t-10 m-b-0 text-ellipsis"><a href="profile.html">{{ item.first_name + ' ' + item.last_name }}</a></h4>
                            <div class="small text-muted">{{ item.designation }}</div>
                            <div class="small text-muted">{{ item.department }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="add_employee" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="modal-content modal-lg">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Employee</h4>
                    </div>
                    <div class="modal-body">
                        <form class="m-b-30" @submit.prevent="createEmployee">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">First Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" v-model="employeeDetails.first_name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Last Name</label>
                                        <input class="form-control" type="text" v-model="employeeDetails.last_name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group iconspecific">
                                        <label class="control-label">Username <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" v-model="employeeDetails.user_name">
                                        <i class="fa fa-times-circle" aria-hidden="true" v-if="! available"></i>
                                        <i class="fa fa-check-circle" aria-hidden="true" v-else-if="available"></i>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group iconspecific">
                                        <label class="control-label">Email <span class="text-danger">*</span></label>
                                        <input class="form-control" type="email" v-model="employeeDetails.email">
                                        <i class="fa fa-times-circle" v-if="! employeeEmailAvailable"></i>
                                        <i class="fa fa-check-circle" v-else-if="employeeEmailAvailable"></i>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Password</label>
                                        <input class="form-control" type="password" v-model="employeeDetails.password">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Confirm Password</label>
                                        <input class="form-control" type="password" v-model="employeeDetails.password">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group iconspecific">
                                        <label class="control-label">Employee ID <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" v-model="employeeDetails.employee_number">
                                        <i class="fa fa-times-circle" v-if="! employeeNumberAvailable"></i>
                                        <i class="fa fa-check-circle" v-else-if="employeeNumberAvailable"></i>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Joining Date <span class="text-danger">*</span></label>
                                        <div class="cal-icon"><input class="form-control datetimepicker" type="text" id="joining_date"></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Phone <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" v-model="employeeDetails.contact">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Company</label>
                                        <select class="form-control" v-model="employeeDetails.company_id">
                                            <option v-for="item in companies" :value="item.id">{{ item.name }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Designation</label>
                                        <select class="form-control" v-model="employeeDetails.designation_id">
                                            <option v-for="item in designations" :value="item.id">{{ item.name }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Supervisior</label>
                                        <select class="form-control" v-model="employeeDetails.supervisior_id">
                                            <option value="-1">Select Supervisor</option>
                                            <option v-for="item in employees" :value="item.id">{{ item.first_name }} {{ item.last_name }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="m-t-20 text-center">
                                <button class="btn btn-primary" v-if="available && employeeNumberAvailable && employeeEmailAvailable">Create Employee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="edit_employee" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="modal-content modal-lg">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Employee</h4>
                    </div>
                    <div class="modal-body">
                        <form class="m-b-30">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">First Name <span class="text-danger">*</span></label>
                                        <input class="form-control" value="John" type="text">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Last Name</label>
                                        <input class="form-control" value="Doe" type="text">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Username <span class="text-danger">*</span></label>
                                        <input class="form-control" value="johndoe" type="text">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Email <span class="text-danger">*</span></label>
                                        <input class="form-control" value="johndoe@example.com" type="email">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Password</label>
                                        <input class="form-control" value="johndoe" type="password">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Confirm Password</label>
                                        <input class="form-control" value="johndoe" type="password">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Employee ID <span class="text-danger">*</span></label>
                                        <input type="text" value="FT-0001" readonly="" class="form-control floating">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Joining Date <span class="text-danger">*</span></label>
                                        <div class="cal-icon"><input class="form-control datetimepicker" type="text"></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Phone </label>
                                        <input class="form-control" value="9876543210" type="text">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Company</label>
                                        <select class="select">
                                            <option>Global Technologies</option>
                                            <option>Delta Infotech</option>
                                            <option selected>International Software Inc</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label">Designation</label>
                                        <select class="select">
                                            <option>Web Developer</option>
                                            <option>Web Designer</option>
                                            <option>SEO Analyst</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive m-t-15">
                                <table class="table table-striped custom-table">
                                    <thead>
                                    <tr>
                                        <th>Module Permission</th>
                                        <th class="text-center">Read</th>
                                        <th class="text-center">Write</th>
                                        <th class="text-center">Create</th>
                                        <th class="text-center">Delete</th>
                                        <th class="text-center">Import</th>
                                        <th class="text-center">Export</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Holidays</td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Leave Request</td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Clients</td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Projects</td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tasks</td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chats</td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Assets</td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Timing Sheets</td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input checked="" type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                        <td class="text-center">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
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
//    import sidenav from '../headerMenu.vue'
    export default{
        data() {
            return {
                companies : [],
                designations : [],
                employees : [],
                employeeDetails : {
                    first_name : '',
                    last_name : '',
                    user_name : '',
                    email : '',
                    password : 'nothing1234',
                    employee_number : '',
                    joining_date : '',
                    contact : '',
                    company_id : '',
                    supervisior_id : '-1',
                    designation_id : '',
                },
                available : false,
                employeeNumberAvailable : false,
                employeeEmailAvailable : false,
                loader : false
            }
        },
        watch : {
            'employeeDetails.last_name' () {
                if(this.employeeDetails.last_name != '') {
                    var first_name = this.employeeDetails.first_name.split(' ').slice(0, 1)
                    var last_name = this.employeeDetails.last_name.split(' ').slice(0, 1)
                    var username = first_name + '.' + last_name
                    username = username.replace(' ', '')
                    this.employeeDetails.user_name = username.toLowerCase()
                    this.usernameAvailable()
                }
            },
            'employeeDetails.user_name' () {
                this.usernameAvailable()
            },
            'employeeDetails.employee_number' () {
                this.employeeNumberCheck()
            },
            'employeeDetails.email' () {
                this.employeeEmailCheck()
            },
        },
        mounted() {
            this.$jqscripts.manageinit()
            this.getEmployees()
            this.getCompanies()
            this.getDesignations()
        },
        methods : {
            createEmployee() {
                this.employeeDetails.joining_date = document.getElementById('joining_date').value;

                this.$axios.post('api/employee', this.employeeDetails, this.$auth.getHeader()).then(response => {
                    this.getEmployees();
                    this.employeeDetails.first_name = this.employeeDetails.last_name = this.employeeDetails.user_name = this.employeeDetails.email = this.employeeDetails.employee_number = this.employeeDetails.joining_date = this.employeeDetails.contact = this.employeeDetails.company_id = this.employeeDetails.designation_id = '';
                    this.employeeDetails.supervisior_id = -1;

                    this.$swal({
                        title: 'Success',
                        text: 'Added Successfully',
                        type: 'success',
                    })
                })
            },
            getEmployees () {
                this.loader = true;
                this.$axios.get('api/employee', this.$auth.getHeader()).then(response => {
                    this.employees = response.data.data
                    this.loader = false;
                })
            },
            getCompanies () {
                this.$axios.get('api/company', this.$auth.getHeader()).then(response => {
                    this.companies = response.data.data
                })
            },
            getDesignations() {
                this.$axios.get('api/designations', this.$auth.getHeader()).then(response => {
                    this.designations = response.data.data
                })
            },
            usernameAvailable () {
                if(this.employeeDetails.user_name != '') {
                    this.$axios.get('api/user/username-availability/' + this.employeeDetails.user_name, this.$auth.getHeader()).then(response => {
                        if (response.data.status == 'available') {
                            this.available = true
                        } else {
                            this.available = false
                        }
                    })
                }
            },
            employeeNumberCheck () {
                if(this.employeeDetails.employee_number != '') {
                    this.$axios.get('api/user/employee-number-availability/' + this.employeeDetails.employee_number, this.$auth.getHeader()).then(response => {
                        if (response.data.status == 'available') {
                            this.employeeNumberAvailable = true
                        } else {
                            this.employeeNumberAvailable = false
                        }
                    })
                }
            },
            employeeEmailCheck () {
                if(this.employeeDetails.email != '') {
                    this.$axios.get('api/user/email-availability/' + this.employeeDetails.email, this.$auth.getHeader()).then(response => {
                        if (response.data.status == 'available') {
                            this.employeeEmailAvailable = true
                        } else {
                            this.employeeEmailAvailable = false
                        }
                    })
                }
            }
        }
    }
</script>

<style>
    .iconspecific{
        position: relative;
    }
    .iconspecific i.fa{
        position: absolute;
        right: 10px;
        top: 33px;
        font-size: 20px;
    }
    .iconspecific i.fa.fa-times-circle{
        color: #ff0000;
    }
    .iconspecific i.fa.fa-check-circle{
        color: #32CD32;
    }
</style>