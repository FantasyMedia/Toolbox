# base64
# 
# @description
# @Copyright 2014 Fantasy <fantasyshao@icloud.com>
# @create 2014-12-11
# @update 2014-12-22

exports.encode = (str) ->
  try
    new Buffer(str).toString('base64')
  catch err
    console.debug err

exports.decode = (str) ->
  try
    new Buffer(str, 'base64').toString('ascii')
  catch err
    console.debug err
