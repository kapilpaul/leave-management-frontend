<template>
    <div>
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-sm-8">
                        <h4 class="page-title">Designations</h4>
                    </div>
                    <div class="col-sm-4 text-right m-b-30">
                        <a href="#" class="btn btn-primary rounded" data-toggle="modal" data-target="#add_designation"><i class="fa fa-plus"></i> Add New Designation</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table m-b-0 datatable">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Designation </th>
                                    <th>Department </th>
                                    <th class="text-right">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(item,index) in designations">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.department.name }}</td>
                                    <td class="text-right">
                                        <div class="dropdown">
                                            <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                            <ul class="dropdown-menu pull-right">
                                                <li><a href="#" data-toggle="modal" data-target="#edit_designation" title="Edit"><i class="fa fa-pencil m-r-5"></i> Edit</a></li>
                                                <li><a href="#" data-toggle="modal" data-target="#delete_designation" title="Delete"><i class="fa fa-trash-o m-r-5"></i> Delete</a></li>
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

        <div id="add_designation" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="modal-content modal-md">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Designation</h4>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="createDesignation">
                            <div class="form-group">
                                <label>Designation Name <span class="text-danger">*</span></label>
                                <input class="form-control" required="" type="text" v-model="designationDetails.name">
                            </div>
                            <div class="form-group">
                                <label>Department <span class="text-danger">*</span></label>
                                <select name="" id="" class="form-control" v-model="designationDetails.department_id">
                                    <option v-for="(item, index) in departments" :value="item.id">{{ item.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="m-t-20 text-center">
                                <button class="btn btn-primary">Create Designation</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="edit_designation" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="modal-content modal-md">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Designation</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label>Designation Name <span class="text-danger">*</span></label>
                                <input class="form-control" value="Web Developer" type="text">
                            </div>
                            <div class="m-t-20 text-center">
                                <button class="btn btn-primary">Edit Designation</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                departments : [],
                designations : [],
                designationDetails : {
                    name : '',
                    department_id : ''
                }
            }
        },
        mounted () {
            this.getDepartments();
            this.getDesignations();
        },
        methods : {
            createDesignation() {
                this.$axios.post('api/designations', this.designationDetails, this.$auth.getHeader()).then(response => {
                    this.designationDetails.name = this.designationDetails.department_id = ''
                    this.getDesignations();
                    this.$swal({
                        title: 'Success',
                        text: 'Added Successfully',
                        type: 'success',
                    })
                })
            },
            getDesignations() {
                this.$axios.get('api/designations', this.$auth.getHeader()).then(response => {
                    this.designations = response.data.data
                })
            },
            getDepartments() {
                this.$axios.get('api/departments', this.$auth.getHeader()).then(response => {
                    this.departments = response.data.data
                })
            }
        }
    }
</script>

<style>

</style>