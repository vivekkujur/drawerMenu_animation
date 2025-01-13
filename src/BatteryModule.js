
import { NativeModules} from 'react-native'

const { BatteryModule } = NativeModules

export const getBatteryModule1= async ()=>{

    try{
        const level =  await BatteryModule.getBatteryLevel()
        return level
    }catch(error){

        return error

    }


}