//基础工具导入：各种注解，启动器（Boot）， 应用基类（Application）
import { Boot, Application, } from "@dpCore/Core"
import { ConfigInject, ControllerInject, ModelInject, EntityInject, MiddlewareInject, } from "@dpCore/Core"
import { Get,Controller,Router } from "@dpCore/Controller"
@Router("/")
class indecController extends Controller {
    
    @Get({
        path:'/',
        output:"comment=输出欢迎页HTML"
    })
    async index (){
        return `
         <h1> Hello world from dpCore </h1>
        `
    }
}
@ControllerInject([indecController])
class app extends Application {}
Boot(app)