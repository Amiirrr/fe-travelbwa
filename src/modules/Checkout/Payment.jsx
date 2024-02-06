import React from 'react'
import { InputText, InputFile } from '@/components/Form'
import imgBCA from '@/assets/img/bca.svg'
import imgMandiri from '@/assets/img/mandiri.svg'

const Payment = ({ data, checkout, ItemDetasils, onChange }) => {

    return (
        <div className='payment wrapper'>
            <div className='info'>
                <h4 className='title'>Transfer Pembayaran:</h4>
                <div className='detail-pembayaran'>
                    <p className='tax'>Tax: <span>10%</span></p>
                    <p className='subTotal'>Sub Total: <span>$420 USD</span></p>
                    <p className='total'>Total: <span>$430 USD</span></p>
                </div>
                <div className='bank'>
                    <figure>
                        <img src={imgBCA} alt="bank BCA" />
                        <figcaption>
                            <p className='bankName'>Bank Central Asia</p>
                            <p className='rekening'>5325 9893</p>
                            <p className='name'>BuildWith Angga</p>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={imgMandiri} alt="bank Mandiri" />
                        <figcaption>
                            <p className='bankName'>Bank Mandiri</p>
                            <p className='rekening'>9874 7546</p>
                            <p className='name'>BuildWith Angga</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className='form'>
                <div>
                    <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                    <InputFile
                        accept="image/*"
                        id="proofPayment"
                        name="proofPayment"
                        value={data.proofPayment}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="bankName">Asal Bank</label>
                    <InputText
                        name='bankName'
                        type="text"
                        placeholder='Please input asal bank...'
                        onChange={onChange}
                        value={data.bankName}
                    />
                </div>
                <div>
                    <label htmlFor="bankHolder">Nama Pengirim</label>
                    <InputText
                        name='bankHolder'
                        type="text"
                        placeholder='Please input nama pnegirim...'
                        onChange={onChange}
                        value={data.bankHolder}
                    />
                </div>
            </div>
        </div>
    )
}

export default Payment