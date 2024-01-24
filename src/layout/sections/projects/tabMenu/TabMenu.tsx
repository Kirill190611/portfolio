import React from 'react';
import {S} from "./TabMenu_Styles";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}
export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <S.TabMenuList>
                {props.tabsItems.map((item,index)=>{
                    return <S.TabMenuItem key={index}>
                        <S.TabMenuLink active={props.currentFilterStatus === item.status} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</S.TabMenuLink>
                    </S.TabMenuItem>
                })}
            </S.TabMenuList>
        </S.TabMenu>
    );
};
