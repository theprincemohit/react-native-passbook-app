import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Picker,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TransactionContext } from '../../context/TransactionContext';

const ReportsScreen = ({ route }) => {
  const { passbookId } = route.params;
  const [filterType, setFilterType] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchRemarks, setSearchRemarks] = useState('');

  const handleExportPDF = () => {
    // PDF export functionality
    alert('PDF export feature coming soon');
  };

  const handleShare = () => {
    // Share functionality
    alert('Share feature coming soon');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Reports & Analytics</Text>
      </View>

      <View style={styles.filtersCard}>
        <Text style={styles.filterLabel}>Filter Type</Text>
        <Picker selectedValue={filterType} onValueChange={setFilterType} style={styles.picker}>
          <Picker.Item label="All Transactions" value="all" />
          <Picker.Item label="Debit Only" value="debit" />
          <Picker.Item label="Credit Only" value="credit" />
        </Picker>

        <Text style={styles.filterLabel}>Start Date (YYYY-MM-DD)</Text>
        <TextInput
          style={styles.input}
          placeholder="Start date"
          value={startDate}
          onChangeText={setStartDate}
          placeholderTextColor="#bdc3c7"
        />

        <Text style={styles.filterLabel}>End Date (YYYY-MM-DD)</Text>
        <TextInput
          style={styles.input}
          placeholder="End date"
          value={endDate}
          onChangeText={setEndDate}
          placeholderTextColor="#bdc3c7"
        />

        <Text style={styles.filterLabel}>Search Remarks</Text>
        <TextInput
          style={styles.input}
          placeholder="Search remarks"
          value={searchRemarks}
          onChangeText={setSearchRemarks}
          placeholderTextColor="#bdc3c7"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonPDF} onPress={handleExportPDF}>
            <Icon name="file-pdf" size={20} color="#fff" />
            <Text style={styles.buttonText}>Export PDF</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonShare} onPress={handleShare}>
            <Icon name="share-variant" size={20} color="#fff" />
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>Filtered results will appear here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#9b59b6',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  filtersCard: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
    marginTop: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  buttonPDF: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonShare: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  resultsText: {
    fontSize: 16,
    color: '#7f8c8d',
  },
});

export default ReportsScreen;
