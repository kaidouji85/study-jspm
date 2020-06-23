import {GbraverBurstCore, ArmDozers, ArmDozerIdList} from "https://jspm.dev/gbraver-burst-core";

window.addEventListener('load', () => {
  const core = new GbraverBurstCore();
  const shinBraver = ArmDozers.find(v => v.id === ArmDozerIdList.SHIN_BRAVER);
  const neoLandozer = ArmDozers.find(v => v.id === ArmDozerIdList.NEO_LANDOZER);
  if (!shinBraver || !neoLandozer) {
    return;
  }

  const player1 = {
    playerId: 'player01',
    armdozer: shinBraver
  };
  const player2 = {
    playerId: 'player02',
    armdozer: neoLandozer
  };
  const initialState = core.start(player1, player2);
  console.log(initialState);
});