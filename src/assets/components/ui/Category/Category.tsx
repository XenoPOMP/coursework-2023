import cn from 'classnames';
import { FC } from 'react';
import styles from './Category.module.scss';
import { CategoryProps } from './Category.props';
import useLocalization from '@hooks/useLocalization';
import ServiceBadge from '@ui/ServiceBadge/ServiceBadge';

const Category: FC<CategoryProps> = ({ index }) => {
  const loc = useLocalization();
  const categoryLocales = loc.servicePage.categories[index];

  return (
    <div className={cn(styles.category)}>
      <h2>{categoryLocales.title}</h2>

      <div className={cn(styles.itemGroup)}>
        {categoryLocales.services.map((service) => (
          <ServiceBadge locales={service} />
        ))}
      </div>
    </div>
  );
};

export default Category;
