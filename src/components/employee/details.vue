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
                                        <a href="#"><img class="avatar" src="assets/img/user.jpg" alt=""></a>
                                    </div>
                                </div>
                                <div class="profile-basic">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="profile-info-left">
                                                <h3 class="user-name m-t-0 m-b-0">John Doe</h3>
                                                <small class="text-muted">Web Designer</small>
                                                <div class="staff-id">Employee ID : FT-0001</div>
                                                <div class="staff-msg"><a href="chat.html" class="btn btn-primary">Send Message</a></div>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <ul class="personal-info">
                                                <li>
                                                    <span class="title">Phone:</span>
                                                    <span class="text"><a href="">9876543210</a></span>
                                                </li>
                                                <li>
                                                    <span class="title">Email:</span>
                                                    <span class="text"><a href="">johndoe@example.com</a></span>
                                                </li>
                                                <li>
                                                    <span class="title">Birthday:</span>
                                                    <span class="text">24th July</span>
                                                </li>
                                                <li>
                                                    <span class="title">Address:</span>
                                                    <span class="text">1861 Bayonne Ave, Manchester Township, NJ, 08759</span>
                                                </li>
                                                <li>
                                                    <span class="title">Gender:</span>
                                                    <span class="text">Male</span>
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
                                    <li>
                                        <div class="experience-user">
                                            <div class="before-circle"></div>
                                        </div>
                                        <div class="experience-content">
                                            <div class="timeline-content">
                                                <a href="#/" class="name">International College of Arts and Science (UG)</a>
                                                <div>Bsc Computer Science</div>
                                                <span class="time">2000 - 2003</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="experience-user">
                                            <div class="before-circle"></div>
                                        </div>
                                        <div class="experience-content">
                                            <div class="timeline-content">
                                                <a href="#/" class="name">International College of Arts and Science (PG)</a>
                                                <div>Msc Computer Science</div>
                                                <span class="time">2000 - 2003</span>
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
                username : ''
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
                })
            }
        }
    }
</script>

<style>

</style>