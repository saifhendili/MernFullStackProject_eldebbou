import React from 'react'
import { List, Icon, Avatar } from 'antd';

function Message(props) {

    const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />  

    return (
       
            props.who==='bot'?   <div className='messagestyle'><List >
          
            <List.Item.Meta
                // avatar={<Avatar icon={AvatarSrc} />}
                // title={props.who}
                description={props.text}
            />
        </List>
        </div>:  <div className='messagestyleUser'><List >
            <List.Item.Meta
                // avatar={<Avatar icon={AvatarSrc} />}
                // title={props.who}
                description={props.text}
            />
        </List>
        </div> 
       
      
    )
}

export default Message
