import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Account Abstraction',
    description: (
      <>
        Gaupa Login offers a simple way to abstract user's wallets and sign in to your application.
      </>
    ),
  },
  {
    title: 'MultiversX Compatible',
    description: (
      <>
        Gaupa Login is MultiversX compatible. Using the benefits of a modern blockchain, with a simple user experience.
      </>
    ),
  },
  {
    title: 'Easy to Integrate',
    description: (
      <>
        Gaupa Login is designed to be easily integrated into your application. Allowing for both frontend and backend interactions.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
