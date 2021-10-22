import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './navBar.css'
import { QuestionCircleOutlined, BellOutlined,DownOutlined,ShoppingCartOutlined  } from '@ant-design/icons';

function navBar() {


	return (
        <>
		<div>
            <header>
                <section>
                    <nav>
                        <ul className='nav__link'>
                            <a className='cta' href='#'>mandü</a>
                            <li><a href='#'>Dashboard</a></li>
                            <li><a href='#'>Organizacion</a></li>
                            <li><a href='#'>Modelos <DownOutlined /> </a></li>
                            <li><a href='#'>Seguimientos <DownOutlined /></a></li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <nav>
                        <ul className='nav__link'>
                            <li><a href='#'><ShoppingCartOutlined /></a></li>
                            <li><a href='#'><QuestionCircleOutlined /></a></li>
                            <li><a href='#'><BellOutlined /></a></li>
                            <li><a href='#'>Administrador <DownOutlined /></a></li>
                            <a href='#'><button className='btn_Mandu'>mandü</button></a>
                        </ul>
                    </nav>
                </section>
            </header>
		</div>
        </>
	);
}

export default navBar;
