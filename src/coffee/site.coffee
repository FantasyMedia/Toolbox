# site
# 
# @description
# @Copyright 2014 Fantasy <fantasyshao@icloud.com>
# @create 2014-12-06
# @update 2014-12-07

class Site
  constructor: () ->

  init: () ->
    @bindMenuEvent()

  bindMenuEvent: () ->
    $('#open').click ->
      $('.sidebar').toggleClass 'hide'
      $('.main').toggleClass 'active'

    $('#close').click ->
      $('.sidebar').addClass 'hide'
      $('.main').removeClass 'active'

$(document).ready ->
  site = new Site()
  site.init()
