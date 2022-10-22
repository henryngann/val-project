import { useEffect, useState } from "react";
export interface Root {
  status: number;
  data: Daum[];
}

export interface Daum {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags?: string[];
  displayIcon?: string;
  displayIconSmall: string;
  bustPortrait?: string;
  fullPortrait?: string;
  fullPortraitV2?: string;
  killfeedPortrait: string;
  background?: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role?: Role;
  abilities: Ability[];
  voiceLine: VoiceLine;
}

export interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

export interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon?: string;
}

export interface VoiceLine {
  minDuration: number;
  maxDuration: number;
  mediaList: MediaList[];
}

export interface MediaList {
  id: number;
  wwise: string;
  wave: string;
}

export default function useFetchAgentApi() {
  const [result, setResult] = useState<Root>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

  //http://localhost:8080/api/agents
  const fetchCall = () =>
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((result) => result as Root);

  useEffect(() => {
    fetchCall().then(
      (result) => {
        setIsLoading(false);
        setResult(result);
      },
      (e) => {
        setIsLoading(false);
        setError(e);
      }
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { fetchCall, result, error, isLoading };
}
