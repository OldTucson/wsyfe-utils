## WSY前端工具库🔧

日常项目开发中通常会用到各种工具函数，如处理时间、操作cooki、科学计算等，这些方法一般存放于项目的utils

为了提高代码的复用性，同时也是提供一个沉淀和管理平台，故整合了部分常用工具函数并发布于NPM上

### 使用

```
npm install wsy-fe-utils
```

以科学计算为例

```js
import WSY_UTILS from 'wsy-fe-utils'

let num = WSY_UTILS.calculate.plus(1,1) //2
```

### 索引

- WSY_UTILS
    - storage (浏览器存储操作)
        - session
        - setSession
        - getSession
        - removeSession
        - cookie
        - setCookie
        - getCookie
        - removeCookie
    - calculate
        - plus
        - minus
        - times
        - divide
    - string
        - trim 去除字符串中的空格
        - strlen 计算字符串的长度
        - changeCase 字符串转换大小写
        - repeatStr 复制字符串
        - replaceAll 替换字符串
        - replaceStr 字符串替换为 *
        - checkType 字符串检测
        - checkPwd 检测密码的等级强度
        - randomNumber 生成字符串
        - countStr 检测一个字符在字符串中出现的次数
    - array
        - removeRepeatArray 数组去重函数
        - upsetArr 打乱数组的顺序
        - maxArr 求数组的最大值
        - minArr 求数组的最小值
        - sumArr 求一个数组的和  基于数字数组
        - covArr 求一个数组的平均数  基于数字数组
        - randomOne 随机获取数组中的一个元素
        - getEleCount 获取一个字符在一个字符串中出现的次数 或  一个元素在一个数组中出现的次数
        - getArrayNum 截取数组长度
        - removeArrayForValue 删除指定值的数组元素
    - md5
        - hexMD5
        - hexMD5w
        - b64MD5
        - b64MD5w
        - calcMD5

### 维护&扩充

1.拉取代码

```
git clone http://192.168.1.18/lisai/wsy-fe-utils.git
```

2.在对应文件夹或新建文件夹中添加你的方法 
    
请使用语义化的模块文件名及方法名，方法名统一风格为驼峰命名法 

添加新的函数时请添加明确的注释

3.发布 

将package.json中的version修改成你要发布的版本号 (同一版本号只能发布一次)

打包 

```
npm run build
```

注册npm账号并联系管理员将你加入开发者

[https://www.npmjs.com/](https://www.npmjs.com/)


若从未在本地登录过则需登录

```
npm login
```

按提示输入用户名密码与邮箱


进入项目目录的父级目录后 键入发布命令 (如果使用的是淘宝镜像则需要切换成https://registry.npmjs.org/) 否则会报错
```
cd ../
npm publish wsy-fe-utils 
```

发布后别忘了将修改同步到git上