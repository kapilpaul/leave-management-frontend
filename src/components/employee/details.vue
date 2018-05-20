<template>
    <div>
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-sm-8">
                        <h4 class="page-title">My Profile</h4>
                    </div>

                    <div class="col-sm-4 text-right m-b-30">
                        <a href="edit-profile.html" class="btn btn-primary rounded"><i class="fa fa-plus"></i> Edit Profile</a>
                    </div>
                </div>
                <div class="card-box">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="profile-view">
                                <div class="profile-img-wrap">
                                    <div class="profile-img">
                                        <a href="#"><img class="avatar" src="http://localhost:8080/assets/img/user.jpg" alt=""></a>
                                    </div>
                                </div>
                                <div class="profile-basic">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="profile-info-left">
                                                <h3 class="user-name m-t-0 m-b-0">{{ employeeDetails.first_name }} {{ employeeDetails.last_name }} </h3>
                                                <small class="text-muted">{{ employeeDetails.designation }}</small>
                                                <div class="staff-id">Employee ID : {{ employeeDetails.employee_number }}</div>
                                                <div class="staff-id">Supervisor : {{
                                                    employeeDetails.supervisior_first_name }}
                                                {{ employeeDetails.supervisior_last_name }}</div>
                                                <div class="staff-id">{{ employeeDetails.company }}</div>
                                                <div class="staff-msg"><a href="chat.html" class="btn btn-primary">Send Message</a></div>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <ul class="personal-info">
                                                <li>
                                                    <span class="title">Phone:</span>
                                                    <span
                                                            class="text"><a href="">{{ employeeDetails.contact }}</a></span>
                                                </li>
                                                <li>
                                                    <span class="title">Email:</span>
                                                    <span
                                                            class="text"><a
                                                            :href="'mailto:' + employeeDetails.email">{{
                                                        employeeDetails.email }}
                                                    </a></span>
                                                </li>
                                                <li>
                                                    <span class="title">Birthday:</span>
                                                    <span class="text" v-if="employeeDetails.date_of_birth">{{ employeeDetails.date_of_birth }}</span>
                                                    <span class="text" v-else>--</span>
                                                </li>
                                                <li>
                                                    <span class="title">Joining Date:</span>
                                                    <span class="text" v-if="employeeDetails.joining_date">{{ employeeDetails.joining_date }}</span>
                                                    <span class="text" v-else>--</span>
                                                </li>
                                                <li>
                                                    <span class="title">Address:</span>
                                                    <span class="text" v-if="employeeDetails.current_address">{{ employeeDetails.current_address }}</span>
                                                    <span class="text" v-else>--</span>
                                                </li>
                                                <li>
                                                    <span class="title">Blood Group:</span>
                                                    <span class="text" v-if="employeeDetails.blood_group">{{ employeeDetails.blood_group }}</span>
                                                    <span class="text" v-else>--</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="card-box">
                            <h3 class="card-title">Additional Informations</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="experience-box">
                                        <ul class="experience-list">
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Emergency Contact Name</a>
                                                        <div v-if="employeeDetails.emergency_contact_name">{{ employeeDetails.emergency_contact_name }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Emergency Contact Number</a>
                                                        <div v-if="employeeDetails.emergency_contact_number">{{ employeeDetails.emergency_contact_number }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Relation With Emergency Contact</a>
                                                        <div v-if="employeeDetails.relation_emergency_contact">{{ employeeDetails.relation_emergency_contact }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Father's Name</a>
                                                        <div v-if="employeeDetails.fathers_name">{{ employeeDetails.fathers_name }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Father's Number</a>
                                                        <div v-if="employeeDetails.fathers_number">{{ employeeDetails.fathers_number }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Mother's Name</a>
                                                        <div v-if="employeeDetails.mothers_name">{{ employeeDetails.mothers_name }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Mother's Number</a>
                                                        <div v-if="employeeDetails.mothers_number">{{ employeeDetails.mothers_number }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="experience-box">
                                        <ul class="experience-list">
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Driving Licence</a>
                                                        <div v-if="employeeDetails.driving_licence">{{ employeeDetails.driving_licence }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a :href="employeeDetails.linkedin" target="_blank" class="name">Linkedin
                                                        </a>
                                                        <div v-if="employeeDetails.linkedin">{{ employeeDetails.linkedin }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">NID
                                                        </a>
                                                        <div v-if="employeeDetails.nid">{{ employeeDetails.nid }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Official Number
                                                        </a>
                                                        <div v-if="employeeDetails.official_number">{{ employeeDetails.official_number }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Passport
                                                        </a>
                                                        <div v-if="employeeDetails.passport">{{ employeeDetails.passport }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Permanent Address
                                                        </a>
                                                        <div v-if="employeeDetails.permanent_address">{{ employeeDetails.permanent_address }}</div>
                                                        <div v-else>--</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li v-if="employeeDetails.spouse_name">
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Spouse Name
                                                        </a>
                                                        <div>{{ employeeDetails.spouse_name }}</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li v-if="employeeDetails.spouse_name">
                                                <div class="experience-user">
                                                    <div class="before-circle"></div>
                                                </div>
                                                <div class="experience-content">
                                                    <div class="timeline-content">
                                                        <a href="#/" class="name">Spouse Number
                                                        </a>
                                                        <div>{{ employeeDetails.spouse_number }}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <div class="card-box m-b-0">
                            <h3 class="card-title">Skills</h3>
                            <div class="skills">
                                <span>IOS</span>
                                <span>Android</span>
                                <span>Html</span>
                                <span>CSS</span>
                                <span>Codignitor</span>
                                <span>Php</span>
                                <span>Javascript</span>
                                <span>Wordpress</span>
                                <span>Jquery</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="card-box">
                            <h3 class="card-title">Education Informations</h3>
                            <div class="experience-box">
                                <ul class="experience-list">
                                    <li v-for="(item, index) in employeeDetails.education">
                                        <div class="experience-user">
                                            <div class="before-circle"></div>
                                        </div>
                                        <div class="experience-content">
                                            <div class="timeline-content">
                                                <a href="#/" class="name">{{ item.institution }}</a>
                                                <div>{{ item.degree }} in {{ item.subject }}</div>
                                                <span class="time">{{ item.starting_date }} - {{ item.complete_date }}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-box m-b-0">
                            <h3 class="card-title">Experience</h3>
                            <div class="experience-box">
                                <ul class="experience-list">
                                    <li>
                                        <div class="experience-user">
                                            <div class="before-circle"></div>
                                        </div>
                                        <div class="experience-content">
                                            <div class="timeline-content">
                                                <a href="#/" class="name">Web Designer at Zen Corporation</a>
                                                <span class="time">Jan 2013 - Present (5 years 2 months)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="experience-user">
                                            <div class="before-circle"></div>
                                        </div>
                                        <div class="experience-content">
                                            <div class="timeline-content">
                                                <a href="#/" class="name">Web Designer at Ron-tech</a>
                                                <span class="time">Jan 2013 - Present (5 years 2 months)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="experience-user">
                                            <div class="before-circle"></div>
                                        </div>
                                        <div class="experience-content">
                                            <div class="timeline-content">
                                                <a href="#" class="name">Web Designer at Dalt Technology</a>
                                                <span class="time">Jan 2013 - Present (5 years 2 months)</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                username : '',
                employeeDetails : []
            }
        },
        mounted() {
            this.getParam()
            this.getEmployeeByUserName()
        },
        methods : {
            getParam () {
                this.username = this.$route.params.username
            },
            getEmployeeByUserName () {
                this.$axios.get('api/employee/' + this.username, this.$auth.getHeader()).then(response => {
                    console.log(response)
                    this.employeeDetails = response.data
                    this.employeeDetails['education'] = JSON.parse(response.data.education)
                }).catch(error => {
                    this.$router.push('/employees')
                })
            }
        }
    }
</script>

<style>

</style>