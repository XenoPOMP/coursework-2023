import { FC, useEffect } from 'react';
import { ProviderProps } from '@providers/Provider.props';
import ru from '@locales/ru';
import en from '@locales/en';
import LocaleMissingError from '@errors/LocaleMissingError';

const LocaleChecker: FC<ProviderProps> = ({ children }) => {
  useEffect(() => {
    // Categories count do not match
    if (ru.servicePage.categories.length !== en.servicePage.categories.length) {
      throw new LocaleMissingError(
        'Categories locales counts do not match [loc.servicePage.categories]',
      );
    }

    ru.servicePage.categories.map((category, categoryIndex) => {
      // Service counts do not match
      if (
        category.services.length !==
        en.servicePage.categories[categoryIndex].services.length
      ) {
        throw new LocaleMissingError(
          `Services locales counts do not match [loc.servicePage.categories[${categoryIndex}].services]`,
        );
      }

      category.services.map((service, serviceIndex) => {
        // Review counts do not match
        if (
          service.reviews.length !==
          en.servicePage.categories[categoryIndex].services[serviceIndex]
            .reviews.length
        ) {
          throw new LocaleMissingError(
            `Review locales counts do not match 
            [loc.servicePage.categories[${categoryIndex}].services[${serviceIndex}].reviews]`,
          );
        }
      });
    });
  }, []);

  return <>{children}</>;
};

export default LocaleChecker;
