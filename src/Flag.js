import React from 'react'

const Flag = ({ answer }) => {
    const style = { width: '50%' }
    return (
        <div>
            {
                answer && <div style={{ marginTop: '20px' }}>
                    <span role="img" aria-label={answer.name.common}></span>
                    <img src={answer.flags.svg} alt="" style={style} />
                </div>

            }
        </div>
    )
}

export default Flag;