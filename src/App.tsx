import React, {useEffect} from 'react';
import './App.scss';
import {Inline} from "./components/Inline/Inline";
import {TabLink} from "./components/TabLink/TabLink";
import {MenuItem} from "./components/MenuItem/MenuItem";
import {Button} from "./components/Button/Button";
import {Checkbox} from "./components/Checkbox/Checkbox";
import {Icon} from "./components/Icon/Icon";
import {ButtonPageNav} from "./components/ButtonPageNav/ButtonPageNav";
import {ButtonUserNav} from "./components/ButtonUserNav/ButtonUserNav";
import {TabPage} from "./components/TabPage/TabPage";

function App() {

    useEffect(() => {
        const searchInput = document.getElementById('search-input');
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === 's' && event.shiftKey) {
                event.preventDefault();
                searchInput?.focus();
            }
        }

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
    }, [])


    return (
    <div className="App">
        <aside className={'left-navigation'}>
            <div className={'navigation-header'}>
                <div className={'profile-container'}>
                    <div className={'profile'}>
                        <img className={'profile-picture'} src={'./profile-img.png'} alt={'profile avatar'}/>
                        <span className={'profile-text'}>Livia Mango</span>
                    </div>
                    <div className={'profile-buttons-container'}>
                        <ButtonUserNav icon={"bell-02"}/>
                        <ButtonUserNav icon={"clock-rewind"}/>
                        <ButtonUserNav icon={"menu"}/>
                    </div>
                </div>
                <div className={'search-container'}>
                    <Icon icon={'search'} width={20} height={20}/>
                    <input id={'search-input'} className={'search-input'} placeholder={'Search'}/>
                    <img className={'arrow-block-up'} src={'./assets/arrow-block-up.svg'} alt={'arrow-block-up'}/>
                </div>

            </div>
            <nav className={'navigation-list'}>
                <MenuItem icon={'star'} label={'Favorites'}/>
                <MenuItem icon={'line-chart-up'} label={'Budgeting and Planning'}/>
                <MenuItem icon={'pie-chart'} label={'CRM and Marketing'}/>
                <MenuItem icon={'log-out'} label={'Sales'}/>
                <MenuItem icon={'log-in'} label={'Purchases'}/>
                <MenuItem icon={'route'} label={'Warehouse and Delivery'}/>
                <MenuItem icon={'cube'} label={'Production'}/>
                <MenuItem icon={'wallet'} label={'Cash Flow'}/>
                <MenuItem icon={'bar-chart-square'} label={'Financial Result and Controlling'}/>
                <MenuItem icon={'building'} label={'Capital Assets'}/>
                <MenuItem icon={'bank-note'} label={'International Financial Accounting'}/>
                <MenuItem icon={'settings'} label={'Master Data and Settings'}/>
            </nav>
        </aside>
        <main className={'section-view'}>
            <nav className={'section-navigation'}>
                <TabPage home />
                <TabPage label={'User and rights settings'}/>
                <TabPage label={'Users'}/>
                <TabPage label={'Administrator EN (User)'} active />
            </nav>
            <section className={'section-tab-switch'}>
                <div className={'pagenav-buttons'}>
                    <ButtonPageNav icon={"arrow-narrow-left"}/>
                    <ButtonPageNav icon={"arrow-narrow-right"}/>
                </div>
                <h3 className={'tab-switch-header'}>Administrator EN (User)</h3>
                <div className={'pagenav-buttons'}>
                    <ButtonPageNav icon={"star"}/>
                    <ButtonPageNav icon={"link"}/>
                    <ButtonPageNav icon={"dots-horizontal"}/>
                </div>
            </section>
            <section className={'user-config'}>
                <nav className={'user-config-menu link-tabs'}>
                    <TabLink label={'Main'} active/>
                    <TabLink label={'Access Rights'} />
                    <TabLink label={'Form on Starting the Application'} />
                    <TabLink label={'Groups'} />
                    <TabLink label={'Interaction Tabs'} />
                    <TabLink label={'Interactions'} />
                    <TabLink label={'My Notes'} />
                    <TabLink label={'Settings'} />
                    <TabLink label={'Tasks'} />
                </nav>
                <div className={'user-config-content'}>
                    <div className={'buttons-container'}>
                        <div className={'buttons-actions'}>
                            <Button localType={'icon'} icon={'menu-2'}/>
                            <Button localType={'icon'} icon={'message'}/>
                            <Button label={'Sales Rules'}/>
                            <Button label={'Start Interview'}/>
                            <Button localType={"dropdown"} label={'Generate'}/>
                            <Button localType={'icon'} icon={'add-user'}/>
                            <Button localType={'icon'} icon={'add-event'}/>
                            <Button localType={'icon'} icon={'dots-horizontal'}/>
                            <Button localType={'icon'} icon={'dots-horizontal'}/>
                        </div>
                        <div className={'buttons-save'}>
                            <Button label={'Save'}/>
                            <Button label={'Save and Close'} primary/>
                        </div>
                    </div>
                    <div className={'inline-container'}>
                        <Inline label={'Full Name'}/>
                        <div className={'checkbox-container'}>
                            <Checkbox label={'Not valid'}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 20"
                                 fill="none">
                                <rect width="20" height="20" rx="10" fill="#FFDB4D"/>
                                <path d="M10 9.99999V15M10 5.99999V5.98999" stroke="black" stroke-width="1.25"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className={'inline-container'}>
                        <Inline label={'Individual'} showIcon/>
                        <Button localType={'icon'} icon={'copy'}/>
                        <Button localType={'icon'} icon={'copy'}/>
                    </div>
                    <div className={'inline-container'}>
                        <Inline label={'Department'} showIcon/>
                        <Button localType={'icon'} icon={'copy'}/>
                    </div>
                    <div className={'container-extra'}>
                        <Checkbox label={'Can log on to Application'} defaultChecked/>
                        <span className="button-link">
                            Set authentication restriction
                        </span>
                    </div>
                </div>
            </section>
            <section className={'user-additional'}>
                <nav className={'user-additional-menu link-tabs'}>
                    <TabLink label={'Main'} active/>
                    <TabLink label={'Addresses and Phones'}/>
                    <TabLink label={'Comment'}/>
                </nav>
                <div className={'user-additional-content'}>
                    <Inline label={'Username (used on sign in)'} showIcon defaultValue={'Administrator'}/>
                    <div className={'checkbox-list'}>
                        <Checkbox label={'1C:Enterprise authentication'} defaultChecked />
                        <div className={'offset-list'}>
                            <div className={'container-extra'}>
                                <div className={'password-label'}>
                                    <Icon icon={'unlock'} width={20} height={20}/>
                                    <span>Blank password</span>
                                </div>
                                <span className="button-link">
                                Set password
                            </span>
                            </div>
                            <div className={'checkbox-container'}>
                                <Checkbox label={'Require to set a password upon authorization'}/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 20"
                                     fill="none">
                                    <rect width="20" height="20" rx="10" fill="#FFDB4D"/>
                                    <path d="M10 9.99999V15M10 5.99999V5.98999" stroke="black" stroke-width="1.25"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Checkbox label={'User has been prevented from changing password'}/>
                            <Checkbox label={'Show in the selection list'} defaultChecked/>
                        </div>
                        <Checkbox label={'OpenID authentication'}/>
                        <Checkbox label={'OS authentication'}/>
                    </div>
                    <div className={'inline-container'}>
                        <Inline label={'Раздел по умолчанию'} showIcon/>
                        <Button localType={'icon'} icon={'dots-horizontal'}/>
                    </div>
                    <Inline label={'Application interface language'} showIcon defaultValue={'English'}/>
                    <div className={'buttons-save'}>
                        <Button label={'Save'}/>
                        <Button label={'Save and Close'} primary/>
                    </div>
                </div>
            </section>
        </main>
    </div>
  );
}

export default App;
