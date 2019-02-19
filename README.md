# simple-eventEmitter
简单的客户端eventEmitter，可以在web端方便的进行事件管理

# 使用方式
```
const event = new EventEmitter()
event.on('eventName', fn).emit('eventName', args)
```
