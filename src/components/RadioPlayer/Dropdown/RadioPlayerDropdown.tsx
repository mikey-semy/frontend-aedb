import React, { useEffect, useState } from 'react';
import { radioStations } from '../RadioPlayer.data';
import { usePlayer } from '@/contexts';
import { Dropdown } from '@/components';

const RadioPlayerDropdown: React.FC = () => {
    
    const { currentUrl, changeStation } = usePlayer();
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);
    const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

    useEffect(() => {
        const newOptions = radioStations.map((station) => ({
            value: station.url,
            label: station.name,
        }));
        setOptions(newOptions);
    }, [radioStations]);
    
    useEffect(() => {
        const currentStation = options.find(option => option.value === currentUrl);
        setSelectedOption(currentStation || null);
    }, [currentUrl, options]);

    const handleStationChange = (station: { value: string; label: string }) => {
        changeStation(station.value);
    };

    return (
        <Dropdown 
            options={options} 
            onSelect={handleStationChange} 
            selectedOption={selectedOption}
        />
    );
};
export default RadioPlayerDropdown;