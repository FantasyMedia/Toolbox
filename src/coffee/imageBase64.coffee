# imageBase64
# 
# @description
# @Copyright 2014 Fantasy <fantasyshao@icloud.com>
# @create 2014-12-22
# @update 2014-12-22

exports.handleFile = (evt) ->
  files = evt.target.files
  output = []
  for file in files
    output.push "#{escape(file.name)} - #{file.type} - #{file.size} bytes"
    reader = new FileReader()
    reader.onload = (f) ->
      $('#base64imageSample').attr 'src', f.target.result
      $('#base64imageOutput').html f.target.result.toString()
        .removeClass 'hidden'

    reader.readAsDataURL(file)


  $('#base64imageInfo').html output
