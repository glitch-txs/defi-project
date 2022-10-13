import React from 'react'
import style from './Stake.module.scss'

const Stake = () => {
  return (
    <div className={style.container} >
        <div className={style.title} > Future Staking Dashboard </div>

        <div className={style.boxContainer}> 

            <div className={style.boxA}>Dashboard</div>

            <div className={style.boxB}>
                <div className={style.StatsA}>
                    <div className={style.Staked}>Total Staked</div>
                    <div className={style.APR}>APR</div>
                </div>
                <div className={style.StatsB}>Statistics</div>
            </div>

        </div>
    </div>
  )
}

export default Stake