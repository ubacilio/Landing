import React, { Fragment, Component } from 'react';
import TopMenu from './components/topMenu';
import Footer from './components/footer';
import './Landing.less';
 
import  {createBrowserHistory} from 'history' 
import {withRouter} from 'react-router-dom';  
import isString from 'lodash/isString';
import { withNamespaces } from 'react-i18next'; 

const langNormalizer = (lang) => {
    const language = isString(lang) ? lang.toLowerCase() : 'en';
    switch (language) {
        case 'gb':
            return 'en';
        default:
            return language;
    }
}

class Landing extends React.Component {
    state = {
        redirect: false
    }
    constructor(props){
        super(props);
        const { i18n } = this.props;
        const currentLocale = i18n.language;

        if (currentLocale !== props.lang) {
            i18n.changeLanguage(props.lang);
        }
        
        this.history = createBrowserHistory();
    }

    changeLanguage = (lng) => {
        let lang = langNormalizer(lng);
    
        const pathAfterLocale = this.props.location.pathname.split('/').slice(2).join('/');
        const path = !!pathAfterLocale ? `/${lang}/${pathAfterLocale}` : `/${lang}`;

        this.props.history.push(path);
        this.props.i18n.changeLanguage(lang);
    }

    render() {
        const {t, i18n, location} = this.props;
        const { redirect } = this.state;

        return (
            <Fragment>
                <section className="contenido">
                    <TopMenu {...this.props} changeLang={this.changeLanguage}/>
                    <section className="Landing"> 
                        {this.props.children}
                    </section>
                    <Footer />
                </section>
            </Fragment>
        )
    }
    
}

export default withRouter(
    withNamespaces()(Landing)
);


