https://saucelabs.zendesk.com/agent/tickets/86279 use as reference. Is this still an ongoing issue?

steps may be more robust https://docs.saucelabs.com/secure-connections/sauce-connect/proxy-tunnels/index.html

# replicator
use [multipass](https://multipass.run) to host the VMs at will.  So everyone in support can spin ubuntu servers up as needed.

# Setup
Do NOT use virtualbox if you're on a mac.  Just use the default [hyperkit](https://github.com/moby/hyperkit), which may require docker.

After that you can follow the guide to start a VM.

### How to do infrastructure as code though?
[cloud-init](https://cloudinit.readthedocs.io/en/latest/) or [ansible](https://www.ivankrizsan.se/2021/05/16/ansible-and-multipass-virtual-machines/)?  Which is doable?

# systemd and sauce connect
https://www.linode.com/docs/guides/introduction-to-systemctl/ good breakdown

Right now I can start the sc but cannot start a tunnel! Why? Where are the logs showing the error?


# generate .har file inside a ci/cd system
ci/cd http debug proxies are slim :/
https://docs.mitmproxy.org/stable/overview-getting-started/ maybe an option