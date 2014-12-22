# site
# 
# @description
# @Copyright 2014 Fantasy <fantasyshao@icloud.com>
# @create 2014-12-06
# @update 2014-12-21

base64 = require './base64'
imageBase64 = require './imageBase64'

class Site
  constructor: () ->

  init: () ->
    @bindMenuEvent()
    @bindEvents()

  bindMenuEvent: () ->
    $('#open').click ->
      $('.sidebar').toggleClass 'hide'
      $('.main').toggleClass 'active'

    $('#close').click ->
      $('.sidebar').addClass 'hide'
      $('.main').removeClass 'active'

  bindEvents: () ->
    base64input = $('#base64input')
    base64output = $('#base64output')

    # Base64 tool
    $('#base64encode').click ->
      console.log base64input.html
      base64output.html base64.encode(base64input.html())

    $('#base64decode').click ->
      base64output.html base64.decode(base64input.html())

    # Image Base64 tool
    $('#base64imageInput').on 'change', imageBase64.handleFile

$(document).ready ->
  site = new Site()
  site.init()
