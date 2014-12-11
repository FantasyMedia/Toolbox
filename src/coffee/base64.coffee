# base64
# 
# @description
# @Copyright 2014 Fantasy <fantasyshao@icloud.com>
# @create 2014-12-11
# @update 2014-12-11

exports.encode = (str) ->
  str = str.replace /\n/g, ''
  .replace /\s/g, ''
  try
    window.btoa str
  catch err
    alert err

exports.decode = (str) ->
  try
    JSON.stringify(JSON.parse(window.atob(str)), undefined, 2)
  catch err
    alert err
