import { gql } from '@apollo/client';


const PRODUCT_BY_EAN = gql`
    query productByEan($ean: String!) {
        productByEan(ean: $ean) {
            ean
            name
            description
            brand {
                name
            }
            composition {
                text
                group {
                    code
                }
                nutritionInformation {
                    contents {
                        code
                        quantity
                        measure
                        group{
                            name
                        }
                    }
                    allergens {
                        label
                        fontCode
                    }
                    nutriscore
                }
                measureInformation {
                    label
                    text
                }
            }
            images {
                type
                url
            }
            aggregateRating {
                ratingCount
                average
                ratingText
                reviewCount
            }
            category {
                id
                name
            }
            labels {
                name
                description
                fontCode
                group {
                    name
                }
            }
        }
    }
`;

export default PRODUCT_BY_EAN;
