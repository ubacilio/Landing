import React, { Fragment } from 'react' 
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './topMenu.css'
import logoNav from '../../../assets/images/logo-nav.png'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css'
import Media from 'react-media'
import { Elastic } from 'react-burgers'
import { registerLang, setCurrentLocale, Text } from 'react-easy-i18n';
import  {createBrowserHistory} from 'history'

import isString from 'lodash/isString';

import { withNamespaces } from 'react-i18next';

class TopMenu extends React.Component {
    state = { 
        showMobileMenu: false
    }
    constructor(props) {
        super(props);  
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state.language = this.props.language; 
        this.history = createBrowserHistory();
        this.changeLang = this.props.changeLang;
    } 

    deNormalizerLang = (lang) => {
        const language = isString(lang) ? lang.toLowerCase() : 'en';
        switch (language) {
            case 'en':
                return 'GB';
            default:
                return language.toUpperCase();
        }
    }

    changeLang(country){
        this.setState({language: country}) 
        
        switch (country) {
            case 'ES': 
                this.props.history.push('/es')
                break;
            case 'GB': 
                this.props.history.push('/en')
                break;
            case 'RU': 
                this.props.history.push('/ru')
                break;
            case 'CN': 
                this.props.history.push('/cn')
                break;   
            default:
                this.props.history.push('/es')
                break;
       }
    }

    
    toggleMenu(){
        
        this.setState({showMobileMenu: !this.state.showMobileMenu})
    }
    render() {  
        const { t, i18n } = this.props; 
        let menu = ''; 
        menu = (
            
            <Fragment>
                <Media query="(max-width: 768px)">
                    <Fragment>
                        <Menu>
                            <Menu.Menu position="left">
                                <Menu.Item>
                                    <Link to="/" >
                                        <Image className="logoTopMenu" src={logoNav} />
                                    </Link> 
                                </Menu.Item>
                            </Menu.Menu>
                            <Menu.Menu position="right">
                                <Menu.Item>
                                    <Elastic
                                        onClick={this.toggleMenu}
                                        width={30}
                                        lineHeight={3}
                                        lineSpacing={5} 
                                        active={this.state.showMobileMenu}/> 
                                </Menu.Item>
                            </Menu.Menu> 
                        </Menu> 
                        {this.state.showMobileMenu && <Menu stackable><Menu.Menu className="mainMenuShow" position="left">
                            <Menu.Item>
                                <Link to={"/"+i18n.language}>
                                {  t("menu.servicios")}
                                </Link>
                            </Menu.Item>  
                            <Menu.Item> 
                                <Link to={"/"+i18n.language+"/nosotros"}>
                                {  t("menu.nosotros")}
                                </Link>
                            </Menu.Item> 
                            <Menu.Item> 
                                <Link to={"/"+i18n.language+"/soporte"}>
                                {  t("menu.soporte")}
                                </Link>
                            </Menu.Item> 
                            <Menu.Item> 
                                <Link to={"/"+i18n.language+"/contacto"}>
                                {  t("menu.contacto")}
                                </Link>
                            </Menu.Item> 
                            <Menu.Item> 
                                <Link target="_blank" to="https://medium.com/@cryptosolartech">
                                {  t("menu.blog")}
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <ReactFlagsSelect onSelect={this.changeLang} defaultCountry={this.deNormalizerLang(i18n.language)} showOptionLabel={false} showSelectedLabel={false} countries={["GB", "ES", "RU", "CN"]}/>
                            </Menu.Item>
                        </Menu.Menu></Menu>}
                    </Fragment>

                        
                </Media>

                <Media query="(min-width: 769px)">
                    <Menu>
                        <Menu.Menu position="left">
                            <Menu.Item>
                                <Link to={"/"+i18n.language} >
                                    <Image className="logoTopMenu" src={logoNav} />
                                </Link>
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position="right">
                            
                            <Menu.Item>
                                <Link to={"/"+i18n.language+"/servicios"}>
                                  {  t("menu.servicios")}
                                </Link>
                            </Menu.Item>  
                            <Menu.Item> 
                                <Link to={"/"+i18n.language+"/nosotros"}>
                                  {  t("menu.nosotros")}
                                </Link>
                            </Menu.Item> 
                            <Menu.Item> 
                                <Link to={"/"+i18n.language+"/soporte"}>
                                  {  t("menu.soporte")}
                                </Link>
                            </Menu.Item> 
                            <Menu.Item> 
                                <Link to={"/"+i18n.language+"/contacto"}>
                                  {  t("menu.contacto")}
                                </Link>
                            </Menu.Item> 
                            <Menu.Item> 
                                <Link target="_blank" to="https://medium.com/@cryptosolartech">
                                  {  t("menu.blog")}
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <ReactFlagsSelect onSelect={this.changeLang} defaultCountry={this.deNormalizerLang(i18n.language)} showOptionLabel={false} showSelectedLabel={false} countries={["GB", "ES", "RU", "CN"]}/>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu> 
                </Media>
            </Fragment>
        ) 
        return (<section>{menu}</section>);
         
    }
    
}

 
export default withNamespaces()(TopMenu)