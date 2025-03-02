/* eslint-disable import/no-anonymous-default-export */
import createIDOFormModal from "./createIDOFormModal";
const {
  formField: {
    tokenAddress,
    decimals,
    isTokenValid,
    presaleRate,
    whitelist,
    softCap,
    hardCap,
    minETH,
    maxETH,
    refundType,
    router,
    liquidityPercentage,
    listingRate,
    start,
    end,
    unlock,
  },
} = createIDOFormModal;

export default {
  [tokenAddress.name]: "",
  [decimals.name]: "",
  [isTokenValid.name]: false,
  [presaleRate.name]: "",
  [whitelist.name]: false,
  [softCap.name]: "",
  [softCap.name]: "",
  [hardCap.name]: "",
  [minETH.name]: "",
  [maxETH.name]: "",
  [refundType.name]: "",
  [router.name]: "",
  [liquidityPercentage.name]: "",
  [listingRate.name]: "",
  [start.name]: "",
  [end.name]: "",
  [unlock.name]: "",
};
