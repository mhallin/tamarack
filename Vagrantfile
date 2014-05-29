# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "ubuntu/trusty64"

  config.vm.synced_folder ".", "/home/vagrant/tamarack"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "provision/site.yml"
    ansible.groups = {
      "dbservers" => ["default"],
      "devservers" => ["default"],
    }
  end

  config.vm.network "forwarded_port", guest: 80, host: 3000

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--memory", "2048"]
  end
end
