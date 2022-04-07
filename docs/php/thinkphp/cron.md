# TP5定时任务+宝塔计划任务

## 实现步骤

1. 在 **`application/command`** 目录下 添加计划任务文件

   ```php
   namespace app\command;
   
   use think\console\Command;
   use think\console\Input;
   use think\console\Output;
   use think\Db;
   use think\Log;
   
   class TaskDemo extends Command
   {
       protected function configure()
       {
           //执行命令
           $this->setName('TaskDemo')
               ->setDescription('计划任务描述');
       }
   
       protected function execute(Input $input, Output $output)
       {
        //业务逻辑
           $this->startWork();
       }
   }
   ```

2. 在`application` 目录下找到`command.php`  

    文件内添加计划任务路径

    ```php
    return [
        'app\command\TaskDemo'
    ];
    ```

## 宝塔中配置定时任务

1. 计划任务

2. 添加计划任务

   | 任务类型 | Shell脚本        |
   | -------- | ---------------- |
   | 任务名称 | 名称             |
   | 执行周期 | 根据自身任务决定 |
   | 脚本内容 | 如下             |

   > 脚本内容

   ```bash
   cd /www/wwwroot/webname
   php think TaskDemo
   ```
