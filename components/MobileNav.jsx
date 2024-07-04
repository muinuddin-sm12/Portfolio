import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {AlignJustify} from 'lucide-react'
import Logo from './Logo';
import Navbar from './Navbar';
const MobileNav = () => {
    return <Sheet>
        <SheetTrigger>
            <AlignJustify className='cursor-pointer'/>
        </SheetTrigger>
        <SheetContent>
            <div className='flex flex-col items-center justify-between h-full py-8'>
                <div className='flex flex-col items-center gap-y-32'>
                    <Logo/>
                    <Navbar containerStyle='flex flex-col items-center gap-y-6' linkStyles='text-2xl'/>
                </div>
            </div>
        </SheetContent>
    </Sheet>
};

export default MobileNav;