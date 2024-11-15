import logo from '../../assets/logo.svg'
import { NewTaskInput } from '../molecules/NewTaskInput'

export const Header = () => {
    return (
        <div className='bg-gray-700 w-full h-52 flex justify-center flex-col items-center gap-14'>
            <img src={logo} alt='logo da aplicação' className='w-32'/>
            <NewTaskInput />
        </div>
    )
}