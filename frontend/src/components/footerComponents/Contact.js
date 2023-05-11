import React from 'react'
import { ReactComponent as Building } from '../../images/building.svg'
import { ReactComponent as Telephone } from '../../images/telephone.svg'
import { ReactComponent as Envelope } from '../../images/envelope-at.svg'

const Contact = () => {
    return (
        <div>
            <hr /><h2 className='text-center'>Contact</h2><hr />
            <table className="table table-borderless text-warning text-center align-middle" style={{ margin: 'auto', width: '60%', fontSize: '125%' }}>
                <tbody>
                    <tr>
                        <td style={{ width: '10%' }}><Building height={70} width={50} /></td>
                        <td>Lahore, Punjab, Pakistan</td>
                    </tr>
                    <tr>
                        <td style={{ width: '10%', marginTop: '10%' }}><Telephone height={70} width={50} /></td>
                        <td>+92 333 1410604</td>
                    </tr>
                    <tr>
                        <td style={{ width: '10%', marginTop: '10%' }}><Envelope height={70} width={50} /></td>
                        <td>schooltrip@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contact