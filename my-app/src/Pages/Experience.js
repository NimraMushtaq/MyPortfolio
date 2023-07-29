import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaGraduationCap} from  "react-icons/fa6";
import { FaBriefcase} from  "react-icons/fa6";
export const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--work'
             date="August 2023-present"
             iconStyle={{background:"#eed202",color:"#fff"}}
             icon={<FaBriefcase/>}
        >
          <h3 className='vertical-timeline-element-title'>Internship</h3>
          <p>Arbisoft</p>
    
        </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
             date="2020-present"
             iconStyle={{background:"#0E2954",color:"#fff"}}
             icon={<FaGraduationCap/>}
        >
          <h3 className='vertical-timeline-element-title'>BSCS</h3>
          <p>Bahria University</p>
    
        </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
             date="2018-2020"
             iconStyle={{background:"#0E2954",color:"#fff"}}
             icon={<FaGraduationCap/>}
        >
          <h3 className='vertical-timeline-element-title'>Bahria College</h3>
          <p>High School HSSC</p>
    
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
             date="2016-2018"
             iconStyle={{background:"#0E2954",color:"#fff"}}
             icon={<FaGraduationCap/>}
        >
          <h3 className='vertical-timeline-element-title'>Bahria College</h3>
          <p>High School SSC</p>
    
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience