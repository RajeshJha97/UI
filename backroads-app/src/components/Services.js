import Title from './Title';

import { ServiceLists } from '../data';
const Services = () => {
  return (
    <section className='section services' id='services'>
      <div className='section-title'>
        <Title title='Our' span='Services' />
      </div>
      <div className='section-center services-center'>
        {ServiceLists.map(
          ({ id, service_icon, service_title, service_desc }) => {
            return (
              <article className='service' key={id}>
                <span className='service-icon'>
                  <i className={service_icon}></i>
                </span>
                <div className='service-info'>
                  <h4 className='service-title'>{service_title}</h4>
                  <p className='service-text'>{service_desc}</p>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Services;
