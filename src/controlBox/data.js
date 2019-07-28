import * as binxLogo from '../assets/images/organization/binx.svg';
import * as gddLogo from '../assets/images/organization/gdd.png';
import * as stackState from '../assets/images/organization/StackState.svg';
import * as xccelerated from '../assets/images/organization/xccelerated.png';
import * as xpirit from '../assets/images/organization/xpirit.svg';
import * as xebiaLogo from '../assets/images/logo.png';
import * as xusLogo from '../assets/images/organization/xus.svg';
import * as xiLogo from '../assets/images/organization/xi.svg';
import * as xeLogo from '../assets/images/organization/xe.svg';
import * as xgLogo from '../assets/images/organization/xg.svg';
import * as xpLogo from '../assets/images/organization/xp.svg';
import * as xbLogo from '../assets/images/organization/xb.svg';
import * as xaLogo from '../assets/images/organization/xa.svg';

export const organizationStructure = {
    name: 'Xebia Group',
    logo: xebiaLogo,
    children: [
        {
            name: 'Xebia Netherlands',
            logo: xebiaLogo,
        },
        {
            name: 'Xprit',
            logo: xpirit,
        },
        {
            name: 'Binx.io',
            logo: binxLogo,
        },
        {
            name: 'Xebia Global Services',
            logo: xebiaLogo,
            children: [
                {
                    name: 'Xebia India',
                    logo: xiLogo,
                    children: [
                        {
                            name: "Xebia Gurugram",
                            logo: xgLogo,
                        },
                        {
                            name: "Xebia Pune",
                            logo: xpLogo,
                        },
                        {
                            name: "Xebia Bangalore",
                            logo: xbLogo,
                        },
                        {
                            name: 'Xebia Academy',
                            logo: xaLogo,
                        }
                    ]
                },
                {
                    name: 'Xebia Middle East',
                    logo: xeLogo,
                },
                {
                    name: 'Xebia US',
                    logo: xusLogo,
                },
            ]
        },
        {
            name: 'GoDataDriven',
            logo: gddLogo,
        },
        {
            name: 'Xccelerated',
            logo: xccelerated,
        },
        {
            name: 'Stack State',
            logo: stackState,
        }
    ]
};