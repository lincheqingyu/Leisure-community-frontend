//Logo 闲享社群
import React, {useEffect, useRef, useState} from "react";
import './Logo.scss'

const Logo = () => {
    const [logoHeight, setLogoHeight] = useState(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (logoRef.current) {
                const height = logoRef.current.clientHeight;
                setLogoHeight(height);
            }
        };

        updateHeight(); // 立即获取图片高度

        window.addEventListener('resize', updateHeight); // 当窗口大小变化时重新计算图片高度

        return () => {
            window.removeEventListener('resize', updateHeight); // 在组件卸载时移除事件监听器
        };
    }, []);

    return (
        <div className='logo'>
            <img
                className='logo-picture'
                ref={logoRef}
                src={require('@/assets/images/logo.png')}
                alt="logo"
            />
            <div className='line' style={{ height: logoHeight }}>
                <div className='black-bg' style={{ height: '50%'}}></div>
                <div className='blue-bg' style={{ height: '50%', backgroundColor: 'rgba(14, 93, 232, 0.45)', display: 'flex', alignItems: 'flex-end' }}>
                    <span className='logo-name'>闲享社群</span>
                </div>
            </div>
        </div>
    );
};

export default Logo