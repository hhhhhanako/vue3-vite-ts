### 搭建项目

- 用vite初始化一个vue3+ts的项目

  - npm init @vitejs/app
  - 输入项目名称 选择框架

- 阅读项目README

  - 推荐vscode+vetur/Volar开发

  - 使用vetur【以下非必要操作】

    - npm install @vuedx/typescript-plugin-vue --save-dev

    - 修改tsconfig.json

      ```
      {
        "compilerOptions": {
        	//...
          "plugins": [
            {
              "name": "@vuedx/typescript-plugin-vue"
            }
          ]
        }
      }
      ```

      

    - 删除shims-vue.d.ts

    - vscode命令行（command+shift+P）输入"Select TypeScript version" -> "Use workspace version"

- prettier+eslint进行格式和代码质量检查

  - 安装eslint并按照指引进行初始化

    ```bash
    npm install eslint --save-dev
    eslint init
    ```

  - 安装prettier和eslint-config-prettier，让pritter覆盖eslint的formatting rule

    ```bash
    npm install prettier --save-dev --save-exact
    npm install eslint-config-prettier --save-dev
    ```

  - 修改.eslintrc.json

    ```javascript
    "extends": [
      "eslint:recommended",
      "plugin:vue/essential",
      "plugin:@typescript-eslint/eslint-recommended",
      "prettier"//添加在最后
    ],
    ```

  - 按照自己的习惯，把vscode里prettier的配置改成了句尾无分号和单引号，可以把对应配置添加到.vscode的setting.json里

    ```javascript
    {
      "prettier.semi": false,
      "prettier.singleQuote": true
    }
    ```

    

- 安装vue-router并配置

  - npm install vue-router@4 -save

  - 配置vite的alias选项时 import path from 'path'报错

    - ts报错找不到模块及相应的类型申明

      ```bash
      npm install --save-dev @types/node
      ```

    - 根据文档，resolve.alias接受一个对象

      ```javascript
      export default defineConfig({
        plugins: [vue()],
        resolve: {
          alias: {
            '/@': path.resolve(__dirname, '/src')
          }
        }
      
      
      })
      ```

    - tsconfig.json同时需要增加路径配置，否则会报错找不到对应路径。

      ```json
      "compilerOptions": {
          //.....
          "baseUrl":".",//
          "paths": {//相对于baseUrl的路径映射
            "/@/*": [
              "src/*"
            ]
          },
        },
      ```

  - 配置vue router的路由

    - router文件夹内增加路由配置router.ts和包含router创建方法的index.ts
    - main.ts引用router/index.ts并使用对应方法
    - App.vue内增加RouterView组件

  - vue router 4.x的变动

    - new Router变成createRouter函数

    - history取代mode

    - 所有的导航都是异步的

      - 在路由ready之后再挂载dom

        ```javascript
        router.isReady().then(()=>{app.mount('#app')})
        ```