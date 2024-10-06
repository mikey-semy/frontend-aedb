import React, { useState, useEffect } from 'react';
import getGroups from '../../../api/Groups/getGroups';
import FormAction from '../../Form/Action';

interface FormAddManualProps {
  onSubmit: (manual: { title: string; file_url: string; group_id: number }) => void;
  onCancel: () => void;
}
const FormAddManual: React.FC<FormAddManualProps> = ({ onSubmit, onCancel }) => {
    const [manual, setManual] = useState({
        title: '',
        file_url: '',
        group_id: 0 
    })

    const [groups, setGroups] = useState([])

    useEffect(() => {
      const fetchGroups = async () => {
        const fetchedGroups = await getGroups();
        setGroups(fetchedGroups);
      };
      fetchGroups();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setManual(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(manual);
    };

    return (
    <form className='form form--manual-add' onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={manual.title}
        onChange={handleChange}
        placeholder="Название инструкции"
        required
      />
      <input
        type="url"
        name="file_url"
        value={manual.file_url}
        onChange={handleChange}
        placeholder="URL файла инструкции"
        required
      />
      <select
        name="group_id"
        value={manual.group_id}
        onChange={handleChange}
        required
      >
        <option value="">Выберите группу</option>
        {groups.map((group: { id: number, name: string }) => (
          <option key={group.id} value={group.id}>{group.name}</option>
        ))}
      </select>
      <FormAction 
        onRequestCancel={onCancel} 
        contentCancel={{icon: '', title: 'Отмена'}} 
        contentSubmit={{icon: '', title: 'Добавить'}}
      />
    </form>
    );
};
export default FormAddManual;