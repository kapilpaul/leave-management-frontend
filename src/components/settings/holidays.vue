    <template>
        <div>
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-sm-8">
                            <h4 class="page-title">Holidays</h4>
                        </div>
                        <div class="col-sm-4 text-right m-b-30">
                            <a href="#" class="btn btn-primary rounded" data-toggle="modal" data-target="#add_holiday"><i class="fa fa-plus"></i> Add New Holiday</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-striped custom-table m-b-0">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title </th>
                                        <th>Holiday Date</th>
                                        <th>Day</th>
                                        <th class="text-right">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item, index) in holidays" :class="[(datePassed(item.date)) ?
                                    'holiday-upcoming' : 'holiday-completed']">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.date | formatDate }}</td>
                                        <td>{{ item.date | formatDay }}</td>
                                        <td class="text-right">
                                            <div class="dropdown">
                                                <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                <ul class="dropdown-menu pull-right">
                                                    <li><a href="#" data-toggle="modal" data-target="#edit_holiday" title="Edit"><i class="fa fa-pencil m-r-5"></i> Edit</a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#delete_holiday" title="Delete"><i class="fa fa-trash-o m-r-5"></i> Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <!--<tr class="holiday-upcoming">-->
                                        <!--<td></td>-->
                                        <!--<td>Christmas</td>-->
                                        <!--<td>25 Dec 2017</td>-->
                                        <!--<td>Monday</td>-->
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="add_holiday" class="modal custom-modal fade" role="dialog">
                <div class="modal-dialog">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <div class="modal-content modal-md">
                        <div class="modal-header">
                            <h4 class="modal-title">Add Holiday</h4>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="createHoliday">
                                <div class="form-group">
                                    <label>Holiday Name <span class="text-danger">*</span></label>
                                    <input class="form-control" required="" type="text" v-model="holidayDetails.name">
                                </div>
                                <div class="form-group">
                                    <label>Holiday Date <span class="text-danger">*</span></label>
                                    <div
                                            class="cal-icon"><input class="form-control datetimepicker" type="text"
                                                                    id="holidaydate"></div>
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary">Create Holiday</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="edit_holiday" class="modal custom-modal fade" role="dialog">
                <div class="modal-dialog">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <div class="modal-content modal-md">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Holiday</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label>Holiday Name <span class="text-danger">*</span></label>
                                    <input class="form-control" value="New Year" required="" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Holiday Date <span class="text-danger">*</span></label>
                                    <div class="cal-icon"><input class="form-control datetimepicker" value="01-01-2017" required="" type="text"></div>
                                </div>
                                <div class="m-t-20 text-center">
                                    <button class="btn btn-primary">Edit Holiday</button>
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
                    holidays : [],
                    holidayDetails : {
                        name : '',
                        date : ''
                    }
                }
            },
            mounted() {
                this.$jqscripts.manageinit();
                this.getHolidays();
            },
            methods : {
                createHoliday() {
                    this.holidayDetails.date = document.getElementById('holidaydate').value;
                    this.$axios.post('api/holiday', this.holidayDetails, this.$auth.getHeader()).then(response => {
                        console.log(response)
                        this.holidayDetails.name = this.holidayDetails.date = ''
                        this.getHolidays();
                        this.$swal({
                            title: 'Success',
                            text: 'Added Successfully',
                            type: 'success',
                        })
                    })
                },
                getHolidays() {
                    this.$axios.get('api/holiday', this.$auth.getHeader()).then(response => {
                        this.holidays = response.data.data
                    })
                },
                datePassed (date) {
                    var current_date = moment().format('YYYY-MM-DD')
                    if(moment(date).isAfter(current_date)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            filters : {
                formatDate(date) {
                    return moment(date).format('DD MMM YYYY');
                },
                formatDay(date) {
                    return moment(date).format('dddd');
                }
            }
        }
    </script>

    <style>
        .table-responsive{
            overflow-x: unset;
        }
    </style>