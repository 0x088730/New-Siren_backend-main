import express from "express";
const router = express.Router();

import { authAdmin, authUser } from '../middleWare/authorization.js';

import { 
    getBalance,
    buyLevel,
    swapMeat, 
    swapEgg, 
    deposit,
    withdraw,

    stakebird,
    stakediamond,
    claimbird,
    claimdiamond,

    getPremium,
    buyLand,

    buyMining,
    claimMining,
    requestMining,
    saveDiscord,

    myAction,

    plantMeat,
    getMeat,
    getCheckWithdrawable,
    login,
    update,
    get24Withdrew,
    getBcsTokenPrice,
    getProfile,
    modifyItem,
    reviveItem,
    referalAdd,
    meat,
    upgradeWall,
    swapEnergy,
    setCurrentDragon,
    checkCoolDown,
    setCoolDown,
    claimDrg,
    convertDrg,
    checkUpgradeAvailable,
    claimHunter,
    hunterLevelUp,
    getHistory,
    getHistoryByWallet,
    getMiningStatus,
    changeResources,
    startMineTownCooldown,
    buyDragon,
    startDragonTownCooldown,
    claimDragonTown,
} from '../controllers/userActions.js';
import {  setRoomData } from "../controllers/roomActions.js";


/* Working with the route. */
router.post('/login', login)
// router.post('/update', authAdmin, update)
router.post('/update', update)
router.post('/', getBalance);
router.post('/buy/level', buyLevel);
router.post('/buy/dragon', buyDragon);
router.post('/claim/drg', claimDrg);
router.post('/convert/drg', convertDrg);
router.post('/change/resources', changeResources);
router.post('/claim/hunter', claimHunter);
router.post('/claim/dragonTown', claimDragonTown);
router.post('/levelup/hunter', hunterLevelUp);
router.post('/check/upgradeavailable',checkUpgradeAvailable)
router.post('/check/cooldown', checkCoolDown);
router.post('/start/mineTown-cooldown',startMineTownCooldown);
router.post('/start/dragonTown-cooldown', startDragonTownCooldown);
router.post('/set/cooldown', setCoolDown);

router.post('/swap/meat', swapMeat);
router.post('/swap/energy', swapEnergy);
router.post('/upgrade/wall', upgradeWall);
router.post('/swap/egg', swapEgg);
router.post('/myaction', myAction);
router.post('/deposit', deposit);
router.post('/meat', meat);
router.post('/withdraw', withdraw);

router.post('/stake/bird', stakebird);
router.post('/stake/diamond', stakediamond);

router.post('/claim/bird', claimbird);
router.post('/claim/diamond', claimdiamond);

router.post('/buypremium', getPremium);
router.post('/buymap', buyLand);
router.post('/getMiningStatus', getMiningStatus);
router.post('/buymining', buyMining);
router.post('/requestmining', requestMining);
router.post('/claimmining', claimMining);

router.post('/plant/set', plantMeat);
router.post('/plant/get', getMeat);

router.post('/discord', saveDiscord);
router.post('/check-withdrawable', getCheckWithdrawable);
router.post('/get-withdrew-amount', get24Withdrew)
router.get('/get-bcs-price', getBcsTokenPrice)

router.post('/room', setRoomData)
router.post('/current-dragon', setCurrentDragon)
router.post('/profile', getProfile)
router.post('/item/revive', reviveItem)
router.post('/item', modifyItem)
router.post('/referal', referalAdd)

router.post('/history',getHistory)
router.post('/history-by-wallet',getHistoryByWallet)
export default router;
