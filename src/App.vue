<template>
  <div id="app">
      <div class="main-wrapper">
          <sidenav v-if="this.$auth.isAuthenticated()"></sidenav>
          <router-view></router-view>
      </div>
      <!--<div class="sidebar-overlay" data-reff="#sidebar"></div>-->
  </div>
</template>

<script>
    import sidenav from './components/headerMenu.vue'
    export default {
        components : {
            sidenav
        },
        mounted() {
            this.sidemenu()
        },
        methods : {
            sidemenu () {
                ! function($) {
                    "use strict";
                    var Sidemenu = function() {
                        this.$menuItem = $("#sidebar-menu a");
                    };

                    Sidemenu.prototype.init = function() {
                        var $this = this;
                        $this.$menuItem.on('click', function(e) {
                            if ($(this).parent().hasClass("submenu")) {
                                e.preventDefault();
                            }
                            if (!$(this).hasClass("subdrop")) {
                                $("ul", $(this).parents("ul:first")).slideUp(350);
                                $("a", $(this).parents("ul:first")).removeClass("subdrop");
                                $(this).next("ul").slideDown(350);
                                $(this).addClass("subdrop");
                            } else if ($(this).hasClass("subdrop")) {
                                $(this).removeClass("subdrop");
                                $(this).next("ul").slideUp(350);
                            }
                        });
                        $("#sidebar-menu ul li.submenu a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
                    },
                        $.Sidemenu = new Sidemenu;

                }(window.jQuery)
            }
        }
    }
</script>

<style>

</style>
