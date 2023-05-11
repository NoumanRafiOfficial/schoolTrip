import React from 'react'
import { ReactComponent as Wa } from '../../images/whatsapp.svg'
import { ReactComponent as Fb } from '../../images/facebook.svg'
import { ReactComponent as Yt } from '../../images/youtube.svg'
import { ReactComponent as In } from '../../images/instagram.svg'
import { ReactComponent as Tk } from '../../images/tiktok.svg'
import { ReactComponent as Tw } from '../../images/twitter.svg'
import { ReactComponent as Sp } from '../../images/snapchat.svg'
import { ReactComponent as Ln } from '../../images/linkedin.svg'
import { ReactComponent as Rd } from '../../images/reddit.svg'
import { ReactComponent as Pn } from '../../images/pinterest.svg'

const SocialMedia = () => {
    return (
        <div>
            <hr /><h2 className='text-center'>Social Profiles</h2><hr />
            <table className="table table-borderless text-warning text-center align-middle" style={{ margin: 'auto', marginBottom: '10%', width: '50%' }}>
                <tbody>
                    <tr>
                        <td colSpan={3} style={{ width: '10%' }}>
                            <Wa height={50} width={50} />
                            <h4>+92 333 1410604</h4>
                        </td>
                    </tr>
                    <tr>
                        <td style={{}}>
                            <a className='text-warning' href='https://www.facebook.com/facebook/' target='_blank' rel="noreferrer">
                                <Fb height={50} width={50} />
                            </a>
                        </td>
                        <td style={{}}><Yt height={50} width={50} /></td>
                        <td style={{}}><In height={50} width={50} /></td>
                    </tr>
                    <tr>
                        <td style={{ marginTop: '10%' }}><Tk height={50} width={50} /></td>
                        <td style={{ marginTop: '10%' }}><Tw height={50} width={50} /></td>
                        <td style={{ marginTop: '10%' }}><Sp height={50} width={50} /></td>
                    </tr>
                    <tr>
                        <td style={{ marginTop: '10%' }}><Ln height={50} width={50} /></td>
                        <td style={{ marginTop: '10%' }}><Rd height={50} width={50} /></td>
                        <td style={{ marginTop: '10%' }}><Pn height={50} width={50} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SocialMedia