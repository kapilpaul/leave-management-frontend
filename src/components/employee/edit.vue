<template>
    <div>
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-sm-8">
                        <h4 class="page-title">Edit Profile</h4>
                    </div>
                </div>
                <form @submit.prevent="updateData">
                    <div class="card-box">
                        <h3 class="card-title">Basic Informations</h3>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="profile-img-wrap">
                                    <img class="inline-block" src="http://localhost:8080/assets/img/user.jpg"
                                         alt="user">
                                    <div class="fileupload btn btn-default">
                                        <span class="btn-text">edit</span>
                                        <input class="upload" type="file">
                                    </div>
                                </div>
                                <div class="profile-basic">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="control-label">First Name</label>
                                                <input type="text" class="form-control"
                                                       v-model="employeeDetails.first_name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="control-label">Last Name</label>
                                                <input type="text" class="form-control floating"
                                                       v-model="employeeDetails.last_name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="control-label">Birth Date</label>
                                                <div class="cal-icon"><input class="form-control floating datetimepicker" type="text" id="birthdate" :value="employeeDetails.date_of_birth | formatDate(employeeDetails.date_of_birth)"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group select-focus">
                                                <label class="control-label">Phone</label>
                                                <input type="text" class="form-control floating"
                                                       v-model="employeeDetails.contact"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-box">
                        <h3 class="card-title">Contact Informations</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <input type="text" class="form-control floating" v-model="employeeDetails.email"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Employee ID</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.employee_number"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Designation</label>
                                    <select class="form-control floating" v-model="employeeDetails.designation_id">
                                        <option value="">Select Designation</option>
                                        <option v-for="(item, index) in designations" :value="item.id">{{ item.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Supervisor</label>
                                    <select class="form-control floating" v-model="employeeDetails.supervisior_id">
                                        <option value="-1">Select Supervisor</option>
                                        <option v-for="(item, index) in employees" :value="item.id">{{
                                            item.first_name }} {{ item.last_name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Company</label>
                                    <select class="form-control floating" v-model="employeeDetails.company_id">
                                        <option>Select Company</option>
                                        <option v-for="(item, index) in companies" :value="item.id">{{ item.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Joining Date</label>
                                    <div class="cal-icon"><input class="form-control floating datetimepicker" type="text" id="joindate" :value="employeeDetails.joining_date | formatDate(employeeDetails.joining_date)"></div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Official Number</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.official_number"/>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Address</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.current_address"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Blood Group</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.blood_group"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Emergency Contact Name</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.emergency_contact_name"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Emergency Contact Number</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.emergency_contact_number"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Relation With Emergency Contact</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.relation_emergency_contact"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Father's Name</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.fathers_name"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Father's Number</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.fathers_number"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Mother's Name</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.mothers_name"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Mother's Number</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.mothers_number"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Spouse's Name</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.spouse_name"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Spouse's Number</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.spouse_number"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">NID</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.nid"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Passport</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.passport"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Driving Licence</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.driving_licence"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Linkedin</label>
                                    <input type="text" class="form-control floating"
                                           v-model="employeeDetails.linkedin"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="control-label">Permanent Address</label>
                                    <input type="text" class="form-control floating" v-model="employeeDetails.permanent_address"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-box">
                        <h3 class="card-title">Education Informations</h3>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row" v-for="(item, index) in educationDetails" :key="item.id">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Institution</label>
                                            <input type="text" class="form-control floating" v-model="item.institution"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Subject</label>
                                            <input type="text" class="form-control floating"  v-model="item.subject"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Starting Date</label>
                                            <input type="text" class="form-control floating"  v-model="item.starting_date"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Complete Date</label>
                                            <input type="text" class="form-control floating"  v-model="item.complete_date"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Degree</label>
                                            <input type="text" class="form-control floating" v-model="item.degree">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Grade</label>
                                            <input type="text" class="form-control floating" v-model="item.grade">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <button class="btn btn-danger"
                                                    @click.prevent="deleteEducationField(index)"></i>Delete
                                            </button>
                                        </div>
                                    </div>

                                    <hr>
                                </div>
                                <div class="add-more">
                                    <button class="btn btn-primary" @click.prevent="AddEducationField"><i class="fa fa-plus"></i>Add More
                                        Institute</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="text-center m-t-20">
                        <button class="btn btn-primary btn-lg" type="button" @click="updateData">Save &amp; update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default{
        data () {
            return {
                username : '',
                employeeDetails : [],
                companies : [],
                designations : [],
                employees : [],
                counterrow: 1,
                educationDetails: []
            }
        },
        mounted() {
            this.$jqscripts.manageinit()
            this.getParam()
            this.getEmployeeByUserName()
            this.getEmployees()
            this.getCompanies()
            this.getDesignations()
        },
        methods : {
            getParam () {
                this.username = this.$route.params.username
            },
            getEmployeeByUserName () {
                this.$axios.get('api/employee/' + this.username, this.$auth.getHeader()).then(response => {
                    console.log(response)
                    this.employeeDetails = response.data
                }).catch(error => {
                    this.$router.push('/employees')
                })
            },
            getEmployees () {
                this.$axios.get('api/employee', this.$auth.getHeader()).then(response => {
                    this.employees = response.data.data
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
            updateData () {
                this.employeeDetails['education'] = this.educationDetails
                this.$axios.patch('api/employee/' + this.username, this.employeeDetails, this.$auth.getHeader()).then(response => {
                    this.$swal({
                        title: 'Success',
                        text: 'Updated Successfully',
                        type: 'success',
                    })
                })
            },
            AddEducationField () {
                this.counterrow += 1;
                this.educationDetails.push(
                    {
                        id : this.counterrow,
                        institution: '',
                        subject: '',
                        starting_date: '',
                        complete_date: '',
                        degree: '',
                        grade: ''
                    }
                );
            },
            deleteEducationField (index) {
                this.educationDetails.splice(index, 1)
            }
        },
        filters : {
            formatDate(date) {
                return moment(date).format('DD-MM-YYYY');
            }
        }
    }
</script>

<style>

</style>